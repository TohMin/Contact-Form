<?php

// $to = "nagahama@anytrail.jp";
$to = "nagahama@anytrail.jp";
$headers = "From: nagahama@anytrail.jp";


$commute = implode(",", $_GET["commute"]);
$changeReason = implode(",", $_GET["changeReason"]);
$attractive = implode(",", $_GET["attractive"]);


$text = "お住まいの地域:" . $_GET["area"] . "\n";
$text = $text . "通勤手段:" . $commute . "\n";
$text = $text . "最寄駅:" . $_GET["station"] . "\n";
$text = $text . "転職時期:" . $_GET["jobdate"] . "\n";
$text = $text . "今回の転職理由について教えてください:" . $changeReason . "\n";
$text = $text . "タクシー業界に感じている魅力について教えてください:" . $attractive . "\n";
$text = $text . "お名前(姓):" . $_GET["firstname"] . "\n";
$text = $text . "お名前(名):" . $_GET["lastname"] . "\n";
$text = $text . "年代:" . $_GET["age"] . "\n";
$text = $text . "電話番号:" . $_GET["phone"] . "\n";
$text = $text . "メールアドレス:" . $_GET["email"] . "\n";

// Send the email
if (mail($to, "転職支援サービスに登録 がありました / taxi-mate.jp", $text, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}

header("Location: ../taxi-mate/registration/thanks/");

$webhook_url = "https://hook.us1.make.com/han76gjtlud87lq42t8yqnjqeghyu780";

// Set the data to be sent
$data = array(
   "お住まいの地域" => $_GET["area"],
   "通勤手段" => $commute,
   "最寄駅" => $_GET["station"],
   "転職時期" => $_GET["jobdate"],
   "今回の転職理由について教えてください" => $changeReason,
   "タクシー業界に感じている魅力について教えてください" => $attractive,
   "お名前(姓)" => $_GET["firstname"],
   "お名前(名)" => $_GET["lastname"],
   "年代" => $_GET["age"],
   "電話番号" => $_GET["phone"],
   "メールアドレス" => $_GET["email"],
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