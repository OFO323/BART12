# Business Applications for a Public Agency

* Members: Rodolfo Higuera, Sarah Lee, Alvin Lim, Denylson Fuentes.
* Goal: Provide new database functionalities to BART's transporation system such as maintanence, alerts, and requests.
* Fall 2020 CSE 120 Project
* Team 12: Titanuim Turtles


## Table of Contents
* [Description](#description)
* [Packages Used](#packages-used)
* [Installation](#installation)
* [Detailed Description of the Database Connection](#detailed-description-of-the-database-connection)
* [About the Database](#about-the-database)


## Description

## Packages Used
Client folder:
* react: 17.0.1
* bootstrap 4: 4.5.3
* axios: 0.21.0
* chart.js: 2.9.4
* emailjs-com: 2.6.4
* moment: 2.29.1
* react-bootstrap: 1.4.0
* react-chartjs-2: 2.11.1
* react-datetime: 3.0.4
* react-dom: 17.0.1
* react-native": 0.63.3
* react-router-dom: 5.2.0
* react-scripts: 4.0.0
* web-vitals: 0.2.4"

Code folder:
* node: 15.3.0
* body-parser: 1.19.0
* cors: 2.8.5
* express: 4.0.15
* nodemon: 2.0.6
* sqlite: 4.0.15
* sqlite3: 5.0.0


## Installation

To run the program, you will need to download the latest version of Node.js from https://nodejs.org/en/.

To install the program into your local system, in your teminal, run: 
```
$ git clone https://github.com/OFO323/BART12
```

For the project to be able to launch and configure locally you have the latest version of npm installed into your system.
```
$npm install npm@latest -g
```

To run the web application, run the following in the terminal:
```
$cd Code
$npm start
```
The terminal should now show the output:
```
> submission@1.0.0 start
> node index.js

Server running 4006
Success
```
Open a new terminal without closing the other terminal. Enter the following:

```
$cd client
$npm start
```
The terminal should now show the output:
```
> client@0.1.0 start 
> react-scripts start
Starting the development server...
```
The web application should automatically pop-up afterwards with a few yellow warnings, which can be ignored.

## Detailed Description of the Database Connection

Our product contains 2 main connections that make it possible for the user to interact with the database. Each of the connections is of great importance as they make it possible for the user to be able to interact with the database in a convenient and easy-to-understand manner. 

The first connection is our link from the back-end server to the database. This connection valuable as it the one that will be able to let us make a request to the database using a backend server that can give us the data in a more structured format using what is javascript object notation. For this connection to be possible we were first to gather the necessary tools for not only the backend server but also for the database. Using the library express and node from javascript we are able to launch a backend server. For the connection to the database, we used a javascript library ‘sqlite3’  that is able to let us choose what type of connection we would like, and in this case, we wanted the connection to let us read and write into the database. Once a connection was established multiple functions were needed to be created as they would serve the purpose of either fetching, updating, or deleting from the database. However, with the multiple functions being created not all were accessible to the backend server yet, this is why another library from javascript was needed. Using a ‘routes’ library we were able to map all the different functions with their individual address. With this final step once the backend server is launched, we are able to make different requests to the database and receive a response. 

The second connection involves connecting our back-end, with prepared routes, to our frontend which will be using said routes to make requests to the back-end. For this connection to be possible there must first a front-end server for the back-end to connect with. The front-end server is created by adding in “ReactJS” libraries that allow us to create a client website server where we can functionalities which will serve to create requests. Since “ReactJS” only contains a fetch function, which serves to only receive data from the database we used another tool, ‘axios’, to make the request for updating and deleting from our database by making a request using our back-end server routes. 


## About the Database
