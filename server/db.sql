-- INITIALIZE DATABASE
DROP SCHEMA IF EXISTS `katawemanity`;
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

-- ADD SOME FAKE DATA FOR PRESENTATION
INSERT INTO contacts (lastname, firstname, phone) VALUES ("Doe", "Melissa", "+32 04 1234567");
INSERT INTO contacts (lastname, firstname, phone) VALUES ("Doe", "John", "+56 04 123456711");
INSERT INTO contacts (lastname, firstname, phone) VALUES ("Dupont", "Albert", "+36 03 123456667");
INSERT INTO contacts (lastname, firstname, phone) VALUES ("Dupont", "Sarah", "+22 06 123456");

-- INITIALIZE TEST DATABASE
DROP SCHEMA IF EXISTS `katawemanity_test`;
CREATE SCHEMA `katawemanity_test`;
USE `katawemanity_test`;

-- CREATE USER FOR katawemanity AND katawemanity_test DATABASE
DROP USER IF EXISTS 'katawemanity'@'localhost';
CREATE USER 'katawemanity'@'localhost' IDENTIFIED BY 'katawemanity';
ALTER USER 'katawemanity'@'localhost' IDENTIFIED WITH mysql_native_password BY 'katawemanity';
GRANT SELECT, INSERT, UPDATE, DELETE ON katawemanity.* TO 'katawemanity'@'localhost';
GRANT ALL PRIVILEGES ON katawemanity_test.* TO 'katawemanity'@'localhost';
FLUSH PRIVILEGES;