# blitz-studio-REST
# Quarentine Reactionaries

# ![Node/Express/Mongoose Project App](node-express.png) 
## Live hosted site [here](https://blitz-studio-rest.azurewebsites.net/)
---
This repo is functionality complete — PRs and issues are welcome!

## Dependencies

- axios
- bootstrap
- moment
- node-sass
- rc-progress
- react-bootstrap
- react-circular-progressbar
- react-dom
- react-redux
- react-router
- react-router-dom
- react-scripts
- redux
- redux-thunk

## Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm sart` to start the local server

## Application Structure

- app.js - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.

- routes/ - This folder contains the route definitions for our application.

- models/ - This folder contains the schema definitions for our Mongoose models.


## Authentication and authorization

Requests are authenticated using username and password and routes are guarded by role based authorization

<br />

## Continuous Integration and Continuous Delivery (CI/CD)

- [Azure devops ](https://dev.azure.com) was used for CI/CD
- The `master` branch is guarded by branch policy and continous integration is triggerd only after successful pull request approval

## Testing the API

- The API can be tested on [swagger](http://localhost:4000/api-docs/)

## Authors
* Michael Woldemedihin
* Sophia Blitz
* Mahmoud Magdy

## License

This project is licensed under the MIT License 