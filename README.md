# mock-anything-api

The mock-anything API generates an array of objects which match a provided schema.

## How to use

mock-anything works by providing a schema and a quantity to the `POST` endpoint `/generate`.

### Currently supported data types

- `string` - currently returns a single, random word
- `email` - returns a randomly generated, fake email address
- `number` - returns a number between 1 - 100
- `date` - returns a date, which will be the time of when the request is made

An example `POST` body:

```JSON
{
    "quantity": 2,
    "schema": {
        "firstName": "string",
        "lastName": "string",
        "email": "email",
        "age": "number",
        "birthday": "date",
        "boolean": "boolean"
    }
}
```

returns:

```JSON
{
    "data": [
        {
            "firstName": "lorem",
            "lastName": "ipsum",
            "email": "dolar@ipsum.io",
            "age": 0,
            "birthday": "2021-08-10T20:27:34.174Z",
            "boolean": true
        },
        {
            "firstName": "lorem",
            "lastName": "ipsum",
            "email": "ipsum@amit.com",
            "age": 0,
            "birthday": "2021-08-10T20:27:34.174Z",
            "boolean": true
        },
    ]
}
```

## Local development

This project uses npm to handle dependencies.

run `npm install` to install dependencies

## Scripts

- `start`: starts the app on port `3000`.
