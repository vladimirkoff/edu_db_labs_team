# Тестування працездатності системи

## Основні положення

Тестування відбувається через **Postman** - програмне забезпечення для роботи з API (у тому числі тестування).

Запуск серверу з файлу **start.js**:  
![alt text](test/img/start.png)

## Тестування REST API

### POST - create

#### Таблиця перед запитом
![alt text](test/img/post_before.png)
#### Запит
![alt text](test/img/post.png)
#### Таблиця після запиту
![alt text](test/img/post_after.png)

### GET - read

#### Усі елементи
![alt text](test/img/post_after.png)
#### Пошук за ID
![alt text](test/img/get_id.png)

### PUT - update

#### Елемент перед запитом
![alt text](test/img/get_id.png)
#### Запит
![alt text](test/img/put.png)
#### Елемент після запиту
![alt text](test/img/put_after.png)

### DELETE

#### Таблиця перед запитом
![alt text](test/img/delete_before.png)
#### Запит
![alt text](test/img/delete.png)
#### Таблиця після запиту
![alt text](test/img/delete_after.png)
