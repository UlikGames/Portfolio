# Vercel Deployment Setup

## Email Configuration

This portfolio uses a Vercel serverless function to handle contact form submissions. You have two options for sending emails:

### Option 1: Resend (Recommended - Easiest)

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Get your API key from the dashboard
3. In Vercel, go to your project settings → Environment Variables
4. Add: `RESEND_API_KEY` = `your_api_key_here`
5. Verify your domain in Resend (or use their test domain for testing)

### Option 2: SMTP (Using Nodemailer)

1. Get SMTP credentials from your email provider (Gmail, SendGrid, etc.)
2. In Vercel, add these environment variables:
   - `SMTP_HOST` = `smtp.gmail.com` (or your SMTP host)
   - `SMTP_PORT` = `587` (or `465` for SSL)
   - `SMTP_USER` = `your-email@gmail.com`
   - `SMTP_PASS` = `your-app-password`

**Note:** For Gmail, you'll need to use an "App Password" instead of your regular password.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Deploy to Vercel:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Testing

After deployment, test the contact form on your live site. Make sure to check:
- Form submission works
- You receive emails at the configured address
- Error messages display correctly if something fails

## Troubleshooting

- Check Vercel function logs in the dashboard
- Verify environment variables are set correctly
- Make sure your email service (Resend/SMTP) is properly configured
- Check browser console for any JavaScript errors

