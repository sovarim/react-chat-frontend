# React chat

## Preview
> - [Demo](https://reactt-chat-frontend.herokuapp.com)

## Установка
Для начала необходимо склонировать и настроить [серверную часть](https://github.com/sovarim/react-chat-backend)

>1. Выполните команду
```shell
yarn install
```
>2. Создайте .env.local файл в корне проекта
```
//Example

REACT_APP_API_URL = 'http://localhost:8002/'
REACT_APP_WS_URL = 'ws://localhost:8002'
```
>3. Запустите проект
```shell
yarn start
```
## Сборка проекта для production
```shell
yarn build
```

## Stack
> - React, TypeScript
> - React Router DOM
> - Redux Toolkit, RTK Query
> - styled-components
> - Formik, Yup
> - WebSocket