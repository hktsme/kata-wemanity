DROP SCHEMA IF EXISTS `katawemanity`;

-- INITIALIZE DATABASE
CREATE SCHEMA `katawemanity`;
USE `katawemanity`;

-- CREATE CONTACT TABLE
CREATE TABLE `katawemanity`.`contacts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- CREATE USER FOR katawemanity DATABASE
DROP USER IF EXISTS 'katawemanity'@'localhost';
CREATE USER 'katawemanity'@'localhost' IDENTIFIED BY 'katawemanity';
ALTER USER 'katawemanity'@'localhost' IDENTIFIED WITH mysql_native_password BY 'katawemanity';
GRANT SELECT, INSERT, UPDATE, DELETE ON katawemanity.* TO 'katawemanity'@'localhost';
FLUSH PRIVILEGES;