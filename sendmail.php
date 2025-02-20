
<?php
if (isset($_POST['sub'])) {
    // Google reCAPTCHA Secret Key
    $secretKey = "6Lf6l9oqAAAAAAS9E-tlVXq7-0FzsbHiZyJmDodC"; // Replace with your Secret Key

    // Get the reCAPTCHA response from the form
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    // Send the request to Google to verify the reCAPTCHA
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$recaptchaResponse");

    // Decode the response
    $responseKeys = json_decode($response, true);

    // If reCAPTCHA is valid (score > 0.5), proceed with sending email
    if (intval($responseKeys["success"]) !== 1) {
        echo "<script>alert('Please complete the reCAPTCHA.'); window.location.href='index.html';</script>";
    } else {
        // Fetching form data
        $name = $_POST['name'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $num = $_POST['number'];
        $message = isset($_POST['message']) ? $_POST['message'] : ''; // Optional message field

        // Recipient email
        $to = "info@dominate-ignite.com";  // Change to your recipient email
        $subject = "New Lead";

        // Form message content
        $email_message = "First Name: $name\n";
        $email_message .= "Last Name: $lname\n";
        $email_message .= "Email: $email\n";
        $email_message .= "Contact Number: $num\n";
        $email_message .= "Message: $message\n";

        // Setting headers
        $headers = [
            "MIME-Version: 1.0",
            "Content-type: text/plain; charset=utf-8",
            "From: $email"  // Dynamic email address from the form
        ];

        // Combine headers into a single string
        $headers = implode("\r\n", $headers);

        // Sending the email
        if (mail($to, $subject, $email_message, $headers)) {
            // Redirect to a page with a success message if email is sent successfully
            echo "<script>alert('Your message has been sent successfully!'); window.location.href='index.html';</script>";
        } else {
            // Show error message if email failed
            echo "<script>alert('Message could not be sent.'); window.location.href='index.html';</script>";
        }
    }
}
?>


