<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "skc-showcase";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_GET['id'])) {
    $id = $_GET['id'];

    // Process the ID or perform any other actions with it
    echo "Received ID: " . $id;

    // Execute JavaScript code using <script> tags
    echo "<script>";
    echo "console.log('Received ID in JavaScript: $id');";
    echo "</script>";
} else {
    echo "No ID received.";
}
// Update the votes column

$votesToAdd = 1;

$sql = "UPDATE `VotesTable` SET `votes` = `votes` + $votesToAdd WHERE `id` = $id";

if ($conn->query($sql) === TRUE) {
    echo "Votes updated successfully!";
} else {
    echo "Error updating votes: " . $conn->error;
}

// Close the connection
$conn->close();
?>
