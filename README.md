# Pizza Shop

## Demo

Demo version you can see at http://pizzashop.emnbc.com

## Requirement

For deployment you need Git and NodeJS 12 or later.

## Deployment

Clone this repository using git `git clone https://github.com/emnbc/pizza-shop.git`

Create .env file in root of the backend directory with following contents:

```
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = <database host>
TYPEORM_PORT = <database port>
TYPEORM_DATABASE = <database name>
TYPEORM_USERNAME = <database user>
TYPEORM_PASSWORD = <database password>
TYPEORM_SCHEMA = public
TYPEORM_SYNCHRONIZE = false
TYPEORM_ENTITIES = src/entities/*.entity.ts
TYPEORM_MIGRATIONS = migrations/*.ts
TYPEORM_MIGRATIONS_DIR = migrations

SECRET_KEY = Df98sd7fsWCf098asHK
```
Information to connect to the database: Telegram: @evgeny_tupikov 

### For development 

From backend directory run `npm i` and after run `npm run start`

From frontend directory run `npm i` and after run `npm run dev`

Navigate to `http://localhost:4230/`.

### For build

From frontend directory run `npm i` and after run `npm run build`

From backend directory run `npm i` and after run `npm run start`

Navigate to `http://localhost:3020/`.