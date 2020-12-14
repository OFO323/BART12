# Business Applications for a Public Agency

* Members: Rodolfo Higuera, Sarah Lee, Alvin Lim, Denylson Fuentes.
* Fall 2020 CSE 120 Project
* Team 12: Titanuim Turtles


# Table of Contents

* [Introduction](#introduction)
* [Project Description](#project-description)
* [Technology](#technology)
  * [Tools Used](#tools-used)
  * [Packages Used](#packages-used)
  * [Installation](#installation)
* [Detailed Application Description](#detailed-application-description)
  * [About the Front-end](#about-the-front-end)
  * [Back-end Connections](#back-end-connections)
  * [About the Database](#about-the-database)


# Introduction

BART currently employs many different reports on crucial information related to capital projects. Our app strives to consolidate all useful reporting data into easy-to-use business data analytics tools that notify the user of important report updates, analyze asset data history, and create new or edit current work orders.

# Project Description

The web application displays several main pages including the home page, asset page, work order page, and create work order page. On the home page, the user can see a notification table (alerts, success, and progress) and recent updates table. In the asset page, the list of assets can be seen with each row having a link to an individual asset page featuring a graph of the meter readings and more details on the asset. In the work order page, a list of work orders can be seen with each row having a link to an edit work order page. The create work order page will require all spaces to be filled out to create a new work order. The search bar requires information from the asset or work order table to be inputted and upon hitting submit, the corresponding rows in the asset or work order table with the information will be displayed. 

# Technology

## Tools Used

* Languages: SQL, Javascript, HTML, CSS
* Software: Visual Studio Code

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

Prerequisites: Node.js `^15.3.0`, npm `^6.14.9`.

1. To install the program into your local system, in your teminal, run: 
```
$ git clone https://github.com/OFO323/BART12
```

2. For the project to be able to launch and configure locally you have the latest version of npm installed into your system.
```
$npm install npm@latest -g
```

3. To run the web application, run the following in the terminal:
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
4. Open a new terminal without closing the other terminal. Enter the following:

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

# Detailed Application Description 

## About the Front-end

We have created several React components to achieve the current front end functionality for this web application.

Firstly, the home page is itself a component that utilizes the ‘notifications’ and ‘updatesTable’ components that each fetch the appropriate data from the database. These data fetches may utilize React’s ‘props’ to communicate data from component to component and pull the correct information.

The Assets page uses the ‘Lists’ component to fetch, structure, and display a list of all the assets and its data with a connection to its own asset page. The use of props allowed us to link each listed asset with its own page dynamically and pull the appropriate data from the database and display all its database information along with a meter reading history graph. 

Similar to the Assets’ page, the Workorders page lists out all the work order data pulled from the database so far. Each Workorder is linked to its own ‘Edit’ component that takes in all the data filled into the input boxes and sends an update query to the backend and updates the correct tuple with the new user input. The “createWO” component works similarly to the “editWO” but sends a new data insert statement to the backend that adds the user input as its own tuple to the appropriate datatable. Submitting a new work order or editing an existing one may utilize the “AlertEmail” component to generate an email to be sent to the project manager and other employees directly involved in the work order in question.  

## Back-end Connections

Our product contains 2 main connections that make it possible for the user to interact with the database. Each of the connections is of great importance as they make it possible for the user to be able to interact with the database in a convenient and easy-to-understand manner. 

The first connection is our link from the back-end server to the database. This connection valuable as it the one that will be able to let us make a request to the database using a backend server that can give us the data in a more structured format using what is javascript object notation. For this connection to be possible we were first to gather the necessary tools for not only the backend server but also for the database. Using the library express and node from javascript we are able to launch a backend server. For the connection to the database, we used a javascript library ‘sqlite3’  that is able to let us choose what type of connection we would like, and in this case, we wanted the connection to let us read and write into the database. Once a connection was established multiple functions were needed to be created as they would serve the purpose of either fetching, updating, or deleting from the database. However, with the multiple functions being created not all were accessible to the backend server yet, this is why another library from javascript was needed. Using a ‘routes’ library we were able to map all the different functions with their individual address. With this final step once the backend server is launched, we are able to make different requests to the database and receive a response. 

The second connection involves connecting our back-end, with prepared routes, to our frontend which will be using said routes to make requests to the back-end. For this connection to be possible there must first a front-end server for the back-end to connect with. The front-end server is created by adding in “ReactJS” libraries that allow us to create a client website server where we can functionalities which will serve to create requests. Since “ReactJS” only contains a fetch function, which serves to only receive data from the database we used another tool, ‘axios’, to make the request for updating and deleting from our database by making a request using our back-end server routes. 


## About the Database

Our database contains several data tables starting with our Asset table. This table stores the location, the meter names, meter readings, different read dates and the department in charge of the asset. Our next table is for the Work orders this table contains the identification of the work order, as well as the project, status, and report date that the work order is created for. We have also created a Department table that contains departments in charge of projects with their unique identification numbers. Along with the Department table we have created a “projManager” data table where we have mapped the different possible managers there can be and given them each their own identification number. Next is our Project data table, this table contains the identification number given to projects when they are created, the manager as well as the department in charge of the project. We have a table, “projAssets”, that is used to link projects to their respective assets. Our final datatable contains information about recent activity involving projects and assets and assigned them a type, “progress”, ‘success’,  ‘alert’  which is determined by the progress of the project. 

