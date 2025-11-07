// Vercel Serverless Function for sending emails
// This replaces mail.php for Vercel deployment

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Only POST method is allowed' 
    });
  }

  try {
    const { project_name, admin_email, form_subject, ...formData } = req.body;

    // Validate required fields
    if (!admin_email || !isValidEmail(admin_email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid admin email address' 
      });
    }

    // Check if there's any form data
    const hasFormData = Object.keys(formData).length > 0;
    if (!hasFormData) {
      return res.status(400).json({ 
        success: false, 
        message: 'No form data received' 
      });
    }

    // Build HTML email message
    let messageRows = '';
    let isEven = false;
    
    for (const [key, value] of Object.entries(formData)) {
      if (value && value.trim() !== '') {
        const sanitizedKey = sanitize(key);
        const sanitizedValue = sanitize(value);
        const rowStyle = isEven ? '' : 'background-color: #f8f8f8;';
        
        messageRows += `
          <tr style="${rowStyle}">
            <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>${sanitizedKey}</b></td>
            <td style="padding: 10px; border: #e9e9e9 1px solid;">${sanitizedValue}</td>
          </tr>
        `;
        isEven = !isEven;
      }
    }

    const htmlMessage = `
      <table style="width: 100%; border-collapse: collapse;">
        ${messageRows}
      </table>
    `;

    // Send email using Resend API (recommended for Vercel)
    // You'll need to install: npm install resend
    // And set RESEND_API_KEY in Vercel environment variables
    
    // Option 1: Using Resend (recommended)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const { data, error } = await resend.emails.send({
        from: `${project_name || 'Portfolio Contact'} <onboarding@resend.dev>`, // Change this to your verified domain
        to: [admin_email],
        replyTo: formData['E-mail'] || admin_email,
        subject: form_subject || 'New Contact Form Message',
        html: htmlMessage,
      });

      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ 
          success: false, 
          message: 'Failed to send email' 
        });
      }

      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully' 
      });
    }

    // Option 2: Fallback - Using Nodemailer with SMTP
    // This requires SMTP credentials in environment variables
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = await import('nodemailer');
      
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${project_name || 'Portfolio Contact'}" <${process.env.SMTP_USER}>`,
        to: admin_email,
        replyTo: formData['E-mail'] || admin_email,
        subject: form_subject || 'New Contact Form Message',
        html: htmlMessage,
      });

      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully' 
      });
    }

    // If no email service is configured
    return res.status(500).json({ 
      success: false, 
      message: 'Email service not configured. Please set up RESEND_API_KEY or SMTP credentials.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred while sending the email' 
    });
  }
}

// Helper functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

