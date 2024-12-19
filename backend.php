<?php
// Backend logic for handling form submissions, if any.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    // Example: Save to a log file
    $log = fopen('logs.txt', 'a');
    fwrite($log, "Name: $name, Email: $email\n");
    fclose($log);

    echo "Thank you, $name! Your request has been processed.";
}
?>
