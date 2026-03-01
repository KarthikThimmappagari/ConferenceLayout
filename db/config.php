<?php
// db/config.php

// Local Settings
$host = 'localhost';
$dbname = 'foodscience_db';
$username = 'root'; 
$password = '';     

// Production Settings (Uncomment and update on server)
/*
$host = 'localhost';
$dbname = 'YOUR_PROD_DB_NAME';
$username = 'YOUR_PROD_USER';
$password = 'YOUR_PROD_PASS';
*/

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // In production, you might want to log this instead of showing it
    $db_connection_error = "Database Connection Failed: " . $e->getMessage();
}
?>
