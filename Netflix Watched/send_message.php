<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];

    $to = "mnule1@gmail.com"; // Your email address
    $subject = "Anonymous Message";
    $body = "Anonymous Message:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message. Please try again later.";
    }
}
?>
