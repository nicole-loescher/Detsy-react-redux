# Desty
## What is it?
 Desty is a clone of etsy, with a tabletop roleplay game twist. The site will allow users to:
* create a product listing for sale
* view a product listing
* update a product listing
* delete a product listing
* leave a review/comment on a product
* add products to a cart
***
## To run this application locally, you'll need to:

* Clone the repo

``` git clone https://github.com/nicole-loescher/Detsy-react-redux```
* cd into the backend

``` cd backend```

* Install NPM packages

```npm install```

* return to the root

``` cd .. ```

* cd into the frontend

``` cd backend```

* Install NPM packages

```npm install```

* Create a .env file based on the .env.example file included in the repo with your own values

* Create a user on your local machine with the username and password specified in your .env file in PostgreSQL

* Create the database

```npx dotenv sequelize db:create```

* Run the migrations

```npx dotenv sequelize db:migrate```

* Seed the database

```npx dotenv sequelize db:seed:all```

* Finally, start the development server with npm start. The scripts in the package.json should do the work. You'll see the local address you can use show up in the terminal.

** using two terminals, make sure to start both the frontend and backend with npm 

```npm start```


