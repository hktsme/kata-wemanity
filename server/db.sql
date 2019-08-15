DROP SCHEMA IF EXISTS `katawemanity`;

-- INITIALIZE DATABASE
CREATE SCHEMA `katawemanity`;
USE `katawemanity`;

-- CREATE CONTACT TABLE
CREATE TABLE `katawemanity`.`contacts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- CREATE USER FOR katawemanity DATABASE
DROP USER IF EXISTS 'katawemanity'@'localhost';
CREATE USER 'katawemanity'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON katawemanity.* TO 'katawemanity'@'localhost';
FLUSH PRIVILEGES;