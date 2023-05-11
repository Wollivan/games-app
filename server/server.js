// import express from our node_modules
const express = require("express");

// import cors from our node_modules - CORS is a middleware, think of it as the bridge between the client and the server
const cors = require("cors");

// run the config method of dotenv so we can have access to our environment variables
require("dotenv").config();

// tell the server what port to run on. We set to what we have in our .env, but if we don't get anything just use 8080
const PORT = process.env.PORT || 8080;

// instantiating our instance of express into the app variable
const app = express();

// ACTIVATE MIDDLEWARE
app.use(cors());

// Importing a json file
const data = require("./games.json");

function findGamesByYear(year) {
  const result = data.filter((game) => game.year == year);
  return result;
}

// Endpoint for /
// the first parameter is the route
// the second parameter is the function that will run each time that route is called
app.get("/", (request, response) => {
  response.json("Hey! You are looking at my root route... how roude!");
});

// Endpoint for /games
app.get("/games", (request, response) => {
  // get ready to return all our data
  let dataToReturn = data;

  // but if the client provided a year in the request, filter the data before returning it
  if (request.query.year) {
    dataToReturn = findGamesByYear(request.query.year);
  }

  response.json(dataToReturn);
});

// start the server on our PORT, and tell us in the console that its working
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));

[
  {
    date: "",
    description: "",
  },
  {
    date: "",
    description: "",
  },
  {
    date: "",
    description: "",
  },
];
