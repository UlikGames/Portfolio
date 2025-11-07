<?php

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

// Initialize response
$response = array('success' => false, 'message' => '');

// Only allow POST requests
if ($method !== 'POST') {
    $response['message'] = 'Only POST method is allowed';
    echo json_encode($response);
    exit;
}

// Initialize message variable
$message = '';

//Script Foreach
$c = true;

$project_name = isset($_POST["project_name"]) ? trim($_POST["project_name"]) : 'Portfolio Contact';
$admin_email  = isset($_POST["admin_email"]) ? trim($_POST["admin_email"]) : '';
$form_subject = isset($_POST["form_subject"]) ? trim($_POST["form_subject"]) : 'New Contact Form Message';

// Validate email
if (empty($admin_email) || !filter_var($admin_email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'Invalid admin email address';
    echo json_encode($response);
    exit;
}

foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
        // Sanitize input
        $key = htmlspecialchars(strip_tags($key));
        $value = htmlspecialchars(strip_tags($value));
        
        $message .= "
        " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
    }
}

if (empty($message)) {
    $response['message'] = 'No form data received';
    echo json_encode($response);
    exit;
}

$message = "<table style='width: 100%; border-collapse: collapse;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: ' . adopt($project_name) . ' <' . $admin_email . '>' . PHP_EOL .
    'Reply-To: ' . $admin_email . '' . PHP_EOL;

// Send email
if (mail($admin_email, adopt($form_subject), $message, $headers)) {
    $response['success'] = true;
    $response['message'] = 'Message sent successfully';
} else {
    $response['message'] = 'Failed to send message. Please try again later.';
}

echo json_encode($response);
