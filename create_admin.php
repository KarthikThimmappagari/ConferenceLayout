<?php
require_once 'db/config.php';

$username = 'admin';
$password = 'foodscience2026';
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO admins (username, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = ?");
    $stmt->execute([$username, $hashed_password, $hashed_password]);
    echo "Admin user '$username' created/updated successfully with hashed password.";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
