-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema UMC_SCHMAS
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema UMC_SCHMAS
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `UMC_SCHMAS` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `UMC_SCHMAS` ;

-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`SNS_Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`SNS_Login` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `type` ENUM('kakao', 'gmail') NULL DEFAULT NULL,
  `SNS_Logincol` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Agree`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Agree` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(15) NULL DEFAULT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `agree` TINYINT NULL DEFAULT NULL,
  `SNS_Login_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Agree_SNS_Login1_idx` (`SNS_Login_id` ASC) VISIBLE,
  CONSTRAINT `fk_Agree_SNS_Login1`
    FOREIGN KEY (`SNS_Login_id`)
    REFERENCES `UMC_SCHMAS`.`SNS_Login` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Mission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Mission` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `store_id` BIGINT NOT NULL,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `complete` TINYINT(1) NULL DEFAULT NULL,
  `created_at` DATETIME(6) NULL DEFAULT NULL,
  `due_date` DATETIME(6) NULL DEFAULT NULL,
  `deadline_at` DATETIME(6) NULL DEFAULT NULL,
  `misson_point` BIGINT NULL DEFAULT NULL,
  `misson_number` BIGINT NULL DEFAULT NULL,
  `review` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Store`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Store` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `store_name` TEXT NULL DEFAULT NULL,
  `store_content` TEXT NULL DEFAULT NULL,
  `Mission_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `Mission_id`),
  INDEX `fk_Store_Mission1_idx` (`Mission_id` ASC) VISIBLE,
  CONSTRAINT `fk_Store_Mission1`
    FOREIGN KEY (`Mission_id`)
    REFERENCES `UMC_SCHMAS`.`Mission` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Map`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Map` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `Store_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Map_Store1_idx` (`Store_id` ASC) VISIBLE,
  CONSTRAINT `fk_Map_Store1`
    FOREIGN KEY (`Store_id`)
    REFERENCES `UMC_SCHMAS`.`Store` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`User` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `password` VARCHAR(50) NULL DEFAULT NULL,
  `name` VARCHAR(10) NULL DEFAULT NULL,
  `nickname` VARCHAR(10) NULL DEFAULT NULL,
  `phonenumber` VARCHAR(14) NULL DEFAULT NULL,
  `address` TEXT NULL DEFAULT NULL,
  `gender` ENUM('male', 'female', 'other') NULL DEFAULT NULL,
  `birth` DATETIME(6) NULL DEFAULT NULL,
  `point` BIGINT NULL DEFAULT NULL,
  `status` VARCHAR(15) NULL DEFAULT NULL,
  `inactive_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Map_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Map_table` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` TEXT NULL DEFAULT NULL,
  `Map_id` BIGINT NOT NULL,
  `User_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_Map_table_Map1_idx` (`Map_id` ASC) VISIBLE,
  INDEX `fk_Map_table_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Map_table_Map1`
    FOREIGN KEY (`Map_id`)
    REFERENCES `UMC_SCHMAS`.`Map` (`id`),
  CONSTRAINT `fk_Map_table_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `UMC_SCHMAS`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Misson_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Misson_table` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT NULL DEFAULT NULL,
  `mission_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `mission_id_idx` (`mission_id` ASC) VISIBLE,
  CONSTRAINT `mission_id`
    FOREIGN KEY (`mission_id`)
    REFERENCES `UMC_SCHMAS`.`Mission` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Preference_Food`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Preference_Food` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `type` ENUM('한식', '중식', '양식', '분식') NULL DEFAULT NULL,
  `User_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Preference_Food_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Preference_Food_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `UMC_SCHMAS`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Review` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `review_content` TEXT NULL DEFAULT NULL,
  `grade` INT NULL DEFAULT NULL,
  `image_data` BLOB NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `Store_id` BIGINT NOT NULL,
  `Store_Mission_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `Store_id`, `Store_Mission_id`),
  INDEX `fk_Review_Store1_idx` (`Store_id` ASC, `Store_Mission_id` ASC) VISIBLE,
  CONSTRAINT `fk_Review_Store1`
    FOREIGN KEY (`Store_id` , `Store_Mission_id`)
    REFERENCES `UMC_SCHMAS`.`Store` (`id` , `Mission_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`alram`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`alram` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `message` TEXT NULL DEFAULT NULL,
  `type` ENUM('1', '2') NULL DEFAULT NULL,
  `agree` TINYINT NULL DEFAULT NULL,
  `User_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_alram_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_alram_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `UMC_SCHMAS`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`Review_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`Review_table` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `alram_id` BIGINT NOT NULL,
  `Mission_id` BIGINT NOT NULL,
  `Review_id` BIGINT NOT NULL,
  `User_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `Mission_id`, `Review_id`, `User_id`),
  INDEX `fk_Review_table_alram1_idx` (`alram_id` ASC) VISIBLE,
  INDEX `fk_Review_table_Mission1_idx` (`Mission_id` ASC) VISIBLE,
  INDEX `fk_Review_table_Review1_idx` (`Review_id` ASC) VISIBLE,
  INDEX `fk_Review_table_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Review_table_alram1`
    FOREIGN KEY (`alram_id`)
    REFERENCES `UMC_SCHMAS`.`alram` (`id`),
  CONSTRAINT `fk_Review_table_Mission1`
    FOREIGN KEY (`Mission_id`)
    REFERENCES `UMC_SCHMAS`.`Mission` (`id`),
  CONSTRAINT `fk_Review_table_Review1`
    FOREIGN KEY (`Review_id`)
    REFERENCES `UMC_SCHMAS`.`Review` (`id`),
  CONSTRAINT `fk_Review_table_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `UMC_SCHMAS`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `UMC_SCHMAS`.`agree_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `UMC_SCHMAS`.`agree_table` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `Agree_id` BIGINT NOT NULL,
  `User_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_agree_table_Agree1_idx` (`Agree_id` ASC) VISIBLE,
  INDEX `fk_agree_table_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_agree_table_Agree1`
    FOREIGN KEY (`Agree_id`)
    REFERENCES `UMC_SCHMAS`.`Agree` (`id`),
  CONSTRAINT `fk_agree_table_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `UMC_SCHMAS`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
