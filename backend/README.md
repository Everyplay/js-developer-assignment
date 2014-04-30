backend
==================

## setup

    npm install


## Run tests

    npm test

## Start app

    node app.js

## Test

Create user:

    curl -X POST -H "Content-Type: application/json" "localhost:9999/users" -d'{"username":"foobar", "password":"123456"}'

List users:

    curl -H "Accept: application/json" -H "Content-Type: application/json" "localhost:9999/users"
