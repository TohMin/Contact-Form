<?php

// $to = "nagahama@anytrail.jp";
$to = "nagahama@anytrail.jp";
$headers = "From: nagahama@anytrail.jp";

$text = "お名前:" . $_GET["name"] . "\n";
$text = $text . "お住まいの住所:" . $_GET["address"] . "\n";
$text = $text . "生まれ年:" . $_GET["birth_year"] . "\n";
$text = $text . "メールアドレス:" . $_GET["email"] . "\n";
$text = $text . "電話番号:" . $_GET["phone"] . "\n";

// Send the email
if (mail($to, "メールで求人を受け取る に登録がありました / taxi-mate.jp", $text, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}

header("Location: ../taxi-mate/contact/thanks/");

$webhook_url = "https://hook.us1.make.com/61ljr4ueovmcd7791h6yanpqdj7kt8l9";

// Set the data to be sent
$data = array(
    "お名前" => $_GET["name"],
    "お住まいの住所" => $_GET["address"],
    "生まれ年" => $_GET["birth_year"],
    "メールアドレス" => $_GET["email"],
    "電話番号" => $_GET["phone"],
);

// Convert the data to JSON
$data_json = json_encode($data);

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $webhook_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_json);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json"
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the cURL request
$response = curl_exec($ch);

// Check for any cURL errors
if(curl_errno($ch)){
    $error_msg = curl_error($ch);
    echo "cURL error: " . $error_msg;
} else {
    // Print the response
    echo "Webhook response: " . $response;
}

// Close the cURL session
curl_close($ch);