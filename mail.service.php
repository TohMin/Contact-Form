<?php
// echo json_encode($_POST);
$to = "saudiclean4@gmail.com";
$headers = "From: sender@example.com";

// Send the email
if (mail($to, "Test email", "Test email", $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}

header("Location: contact-thanks.html");
exit;