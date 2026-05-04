-- Reconstructed Schema for DOLE-GIP System
-- Based on db_inspector_results.json

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for offices
-- ----------------------------
CREATE TABLE IF NOT EXISTS `offices` (
  `office_id` int(11) NOT NULL AUTO_INCREMENT,
  `office_code` varchar(50) DEFAULT NULL,
  `office_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`office_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for status_types
-- ----------------------------
CREATE TABLE IF NOT EXISTS `status_types` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for genders
-- ----------------------------
CREATE TABLE IF NOT EXISTS `genders` (
  `gender_id` int(11) NOT NULL AUTO_INCREMENT,
  `gender_name` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`gender_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for users
-- ----------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `bio_graphy` text DEFAULT NULL,
  `home_address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `languages` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `religion` varchar(100) DEFAULT NULL,
  `notifications_enabled` tinyint(1) DEFAULT 1,
  `profile_picture_path` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `role` varchar(50) DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_login` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for beneficiaries
-- ----------------------------
CREATE TABLE IF NOT EXISTS `beneficiaries` (
  `beneficiary_id` int(11) NOT NULL AUTO_INCREMENT,
  `gip_id` varchar(100) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `contact_number` varchar(50) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender_id` int(11) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `series_number` varchar(100) DEFAULT NULL,
  `office_id` int(11) DEFAULT NULL,
  `office_name` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `replacement_notes` text DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `absorption_log_id` int(11) DEFAULT NULL,
  `is_archived` tinyint(1) DEFAULT 0,
  `archived_at` timestamp NULL DEFAULT NULL,
  `archived_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`beneficiary_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for absorption_logs
-- ----------------------------
CREATE TABLE IF NOT EXISTS `absorption_logs` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `beneficiary_id` int(11) DEFAULT NULL,
  `absorption_datetime` timestamp NULL DEFAULT NULL,
  `where` varchar(255) DEFAULT NULL,
  `logged_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `position` varchar(255) DEFAULT NULL,
  `agency` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for accomplishment_reports
-- ----------------------------
CREATE TABLE IF NOT EXISTS `accomplishment_reports` (
  `ar_id` int(11) NOT NULL AUTO_INCREMENT,
  `beneficiary_id` int(11) DEFAULT NULL,
  `period` varchar(100) DEFAULT NULL,
  `date_submitted` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ar_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for beneficiary_documents
-- ----------------------------
CREATE TABLE IF NOT EXISTS `beneficiary_documents` (
  `doc_id` int(11) NOT NULL AUTO_INCREMENT,
  `beneficiary_id` int(11) DEFAULT NULL,
  `document_name` varchar(255) DEFAULT NULL,
  `status` text DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for daily_time_records
-- ----------------------------
CREATE TABLE IF NOT EXISTS `daily_time_records` (
  `dtr_id` int(11) NOT NULL AUTO_INCREMENT,
  `beneficiary_id` int(11) DEFAULT NULL,
  `record_date` date DEFAULT NULL,
  `weekday` varchar(20) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`dtr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `read_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
