# Captain's Log App Backend 

Welcome to the Captain's Log App repository! This is a fully functional CRUD application built  to keep track of daily logs. The app is developed using JavaScript, Express, Node.js, and MongoDB with Mongoose for database management. It allows to create, read, update, and delete log entries easily.

### Learning Objectives
Through the completion of this project, the following learning objectives was achieved:

Successfully built a RESTful application using Express and Node.js.
Implemented full CRUD functionality, allowing users to manage their log entries effectively.
Utilized MongoDB and Mongoose to store and retrieve log data.
Enhanced JavaScript skills and gained practical experience in web development.
Getting Started
To explore the Captain's Log App, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory and install project dependencies using npm:
npm install
Configure the MongoDB connection in the config.js file.

### Restful Routes
The application provides the following RESTful routes:

Index: Display a list of all log entries.
Show: Display details of a specific log entry.
New: Display a form to create a new log entry.
Create: Handle the creation of a new log entry.
Edit: Display a form to edit an existing log entry.
Update: Handle the update of an existing log entry.
Destroy: Delete a log entry.


### Access Routes and Usage
Index Route Access: /logs
Method: GET - View a list of all log entries.

Show Route Access: /logs/:id
Method: GET - View details of a specific log entry.

Create Route Access: /logs/new
Method: POST - Create a new log entry using a form.

Edit Route Access: /logs/:id/edit
Method: PUT - Handle the update of an existing log entry.

Destroy Route Access: /logs/:id
Method: DELETE - Delete a log entry.

Models and Database
MongoDB Model: Log
Properties: title (string), entry (string), shipIsBroken (boolean)

### Additional Features
Utilized the date object to display human-readable dates in the HTML.
Created additional routes for managing eating habits (foodlogs).

