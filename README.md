# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installing/ Getting Started 

Before running the app, open JSON server on the backend side is required and clone this repository from the front end and then install npm.

![git hub code](https://github.com/kyuhee1011/kyuhee-react-project/blob/main/assets/react%20clone%20instruction.jpg)

Please run the JSON-server first on the BACKEND side to bring all the data from the db.json file.

Installation is done by the command below to run the JSON-server on the backend side. 

```ubuntu
cd db 
json-server --watch db.json
```
## Quick Start 

After opening the JSON server on the backend side, install npm on the frontend side by following:

```ubuntu
npm install 
npm start 
```
![git hub code](https://github.com/kyuhee1011/kyuhee-react-project/blob/main/assets/npm%20start%20.jpg)

They will ask a question to open another port because you have the JSON server already open on the backend side. 
Answer the Y to the questions to open another one on the Frontend side to start the app.

## Features

- Have 6 Components and Included 4 routes for the Client side (User to interact) with Home, DessertContainer (Dessert page), DessertPop (My Dessert page), AddForm (Add Dessert page).

- The ability to add dessert to create favorite list and remove by clicking the button.

- Responsive Design.

- Optimized for navigation.

## Backend Code GitHub Repository

https://github.com/kyuhee1011/json-server-template.git



## Video

https://youtu.be/jAjCqUUYO6A

## Acknowledgment

Dessert images: https://www.wikipedia.org/

## Hierchy Breakdown

- App
- NavBar
- Home
- DessertContainer (Dessert)
  - Dessert Card
- Dessert Pop
  - Dessert Card (My Dessert)
- AddForm

## Demo

![project_gif](https://github.com/kyuhee1011/kyuhee-react-project/blob/main/assets/Phase-2_React_Project_Demo.gif).
