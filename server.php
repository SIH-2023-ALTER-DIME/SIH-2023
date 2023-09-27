<?php
// Database configuration
$servername = "localhost";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password for XAMPP
$database = "users"; // Your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handling form submissions
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if it's a login or registration form submission
    if (isset($_POST["login"])) {
        $userId = $_POST["loginUserId"];
        $password = $_POST["loginPassword"];

        // Add code to validate and process login data here
    } elseif (isset($_POST["register"])) {
        $userId = $_POST["registerUserId"];
        $fullName = $_POST["fullName"];
        $email = $_POST["email"];
        $field = $_POST["field"];
        $password = $_POST["registerPassword"];

        // Add code to insert registration data into the database here
    }
}

$conn->close();
?>
