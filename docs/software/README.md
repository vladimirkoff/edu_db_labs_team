# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `login` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  `role` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`help`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`help` ;

CREATE TABLE IF NOT EXISTS `mydb`.`help` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`filter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`filter` ;

CREATE TABLE IF NOT EXISTS `mydb`.`filter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_from` DATETIME NOT NULL,
  `date_to` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `date` DATETIME NOT NULL,
  `filter_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_request_filter1_idx` (`filter_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_filter1`
    FOREIGN KEY (`filter_id`)
    REFERENCES `mydb`.`filter` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `role` TEXT NOT NULL,
  `user_id` INT NOT NULL,
  `help_id` INT NOT NULL,
  `request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_User_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_Access_Help1_idx` (`help_id` ASC) VISIBLE,
  INDEX `fk_access_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_User`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Help1`
    FOREIGN KEY (`help_id`)
    REFERENCES `mydb`.`help` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `request_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;

CREATE TABLE IF NOT EXISTS `mydb`.`source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` TEXT NOT NULL,
  `request_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_source_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_source_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role`) VALUES (DEFAULT, 'John', 'JohnRoth', 'passw123', 'j@email.com', 'public');
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role`) VALUES (DEFAULT, 'Kate', 'KateDotson', 'passw124', 'k@email.com', 'public');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`request`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`request` (`id`, `title`, `description`, `date`, `filter_id`) VALUES (DEFAULT, 'Text search query ', 'breaking news around the world', '2022-12-02', NULL);
INSERT INTO `mydb`.`request` (`id`, `title`, `description`, `date`, `filter_id`) VALUES (DEFAULT, 'Photo search query', 'find similar images', '2022-11-20', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`source` (`id`, `url`, `request_id`) VALUES (DEFAULT, 'https://www.nytimes.com/', NULL);
INSERT INTO `mydb`.`source` (`id`, `url`, `request_id`) VALUES (DEFAULT, 'https://images.google.com/', NULL);

COMMIT;
```

## RESTfull сервіс для управління даними

### Головний файл, з якого відбувається запуск сервера

```js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const router = require('./router');

const app = express();
const port = 3030;

connection.connect();

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
});
```

### Модуль підключення до бази даних

```js
const mysql = require('mysql2');

const connectionUrl = 'mysql://root:k1llr34l@localhost:3306/mydb';
const connection = mysql.createConnection({
  uri: connectionUrl
});

module.exports = connection;
```

### Модуль з реалізацією REST API до таблиці Result

```js
const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.post('/result', (req, res) => {
  const { title, description, request_id } = req.body;
  
  if(!(title && description && request_id)) {
    res.send('There is empty field.');
    return;
  }
  
  connection.query(
    `INSERT INTO result (id, title, description, request_id) 
    VALUES (DEFAULT, '${title}', '${description}', ${request_id})`,
  (error) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send('Record has been added');
  });
});
  
router.post('/result/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, request_id } = req.body;
  
  if(!(title && description && request_id)) {
    res.send('There is empty field.');
    return;
  } 
  
  connection.query(
    `INSERT INTO result (id, title, description, request_id) 
    VALUES (${id}, '${title}', '${description}', ${request_id})`,
  (error) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send('Record has been added');
  });
});
  
router.get('/results', (req, res) => {
  connection.query('SELECT * FROM result', 
  (error, result) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send(result);
  });
});
  
router.get('/result/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM result WHERE id = ${id}`,
  (error, result) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send(result);
  });
});
  
router.put('/result/:id', (req, res) => {
  const id = req.params.id;
  
  connection.query(`SELECT * FROM result WHERE id = ${id}`,
  (error, [result]) => {
    if (error) {
      console.log(result);
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    const { title, description, request_id } = { ...result, ...req.body};
    connection.query(
      `UPDATE result 
      SET title = '${title}', 
      description = '${description}', 
      request_id = ${request_id} 
      WHERE id = ${id}`,
    (error) => {
      if (error) {
        console.log(error);
        res.send('Something went wrong.');
        return;
      }
      res.send('Record has been updated');
    });
  });
});
  
router.delete('/result/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM result WHERE id = ${id}`,
  (error) => {
    if (error) {
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    res.send('Record has been deleted');
  });
});

module.exports = router;
```