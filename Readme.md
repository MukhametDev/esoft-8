# REST API для управления пользователями

## Описание

Этот проект представляет собой простой RESTful сервис для управления списком пользователей. Он позволяет выполнять следующие операции:

- Получение списка всех пользователей.
- Получение информации о конкретном пользователе по ID.
- Добавление нового пользователя.
- Обновление информации о пользователе по ID.
- Удаление пользователя по ID.
- Дополнительные эндпоинты для получения пользователей по возрасту, email-домену и в отсортированном по имени порядке.

## Эндпоинты

1. Получение всех пользователей
- Метод: GET
- Путь: /users
- Описание: Получить список всех пользователей.
- Параметры запроса: Нет
- Тело запроса: Нет
- Тело ответа:
  [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30
    },

  ]
Пример запроса:
GET /users

Пример ответа:
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "age": 25
  }
]

1. Получение пользователя по ID
Метод: GET
Путь: /users/:id
Описание: Получить информацию о конкретном пользователе по ID.
Параметры запроса:
id (string): ID пользователя.
Тело запроса: Нет
Тело ответа:
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}

Пример запроса:
GET /users/1

Пример ответа:
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}

1. Добавление нового пользователя
Метод: POST
Путь: /users
Описание: Добавить нового пользователя.
Тело запроса:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}

Тело ответа:
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}

Пример запроса:
POST /users
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}
Пример ответа:
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}

1. Обновление пользователя по ID
Метод: PUT
Путь: /users/:id
Описание: Обновить информацию о пользователе по ID.
Параметры запроса:
id (string): ID пользователя.
Тело запроса:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 31
}

Тело ответа:
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 31
}

Пример запроса:
PUT /users/1
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 31
}

Пример ответа:
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 31
}

1. Удаление пользователя по ID
Метод: DELETE
Путь: /users/:id
Описание: Удалить пользователя по ID.
Параметры запроса:
id (string): ID пользователя.
Тело запроса: Нет
Тело ответа:
{
  "message": "User deleted successfully"
}

Пример запроса:
DELETE /users/1

Пример ответа:
{
  "message": "User deleted successfully"
}

1. Получение пользователей по возрасту
Метод: GET
Путь: /users/age/:age
Описание: Получить список всех пользователей старше указанного возраста.
Параметры запроса:
age (number): Возраст для сравнения.
Тело запроса: Нет

Тело ответа:
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 31
  },
  ...
]
Пример запроса:
GET /users/age/30

Пример ответа:
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 31
  }
]

1. Получение пользователей по email-домену
Метод: GET
Путь: /users/domain/:domain
Описание: Получить список всех пользователей с указанным email-доменом.
Параметры запроса:
domain (string): Email-домен для фильтрации.
Тело запроса: Нет

Тело ответа:
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  },
]
Пример запроса:
GET /users/domain/example.com
Пример ответа:
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
]

1. Получение пользователей, отсортированных по имени
Метод: GET
Путь: /users/sorted
Описание: Получить список всех пользователей, отсортированный по имени в алфавитном порядке.
Параметры запроса: Нет
Тело запроса: нет
Тело ответа:
[
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "age": 25
  },
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
]
Пример запроса:
GET /users/sorted

Пример ответа:
[
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "age": 25
  },
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
]

Запуск сервера
Клонируйте репозиторий.

Установите зависимости:
-npm install

Запустите сервер:
-npm start

Сервер будет доступен по адресу http://localhost:3000.