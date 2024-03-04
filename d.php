<?php
// Database credentials
$servername = "localhost";
$username = "";
$password = "";
$database = "d";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Prepare SQL statement to insert data into the database
    $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";

    // Execute SQL statement
    if ($conn->query($sql) === TRUE) {
        echo "Message inserted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
