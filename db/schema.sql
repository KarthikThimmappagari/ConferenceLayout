CREATE DATABASE IF NOT EXISTS `FoodScience`;
USE `FoodScience`;

CREATE TABLE IF NOT EXISTS `registrations` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(20),
    `name` VARCHAR(255),
    `email` VARCHAR(255),
    `phone` VARCHAR(50),
    `org` VARCHAR(255),
    `job_title` VARCHAR(100),
    `billing_address` TEXT,
    `city` VARCHAR(100),
    `country` VARCHAR(100),
    `coupon_code` varchar(50) DEFAULT NULL,
    `discount_amount` decimal(10,2) DEFAULT 0.00,
    `reg_info` TEXT,
    `total_amount` DECIMAL(10, 2),
    `payment_status` ENUM('Pending', 'Success', 'Failed') DEFAULT 'Pending',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `admins` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Default admin user (password: admin123)
INSERT INTO `admins` (`username`, `password`) 
VALUES ('admin', 'admin123')
ON DUPLICATE KEY UPDATE id=id;
