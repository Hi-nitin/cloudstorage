const express = require('express');
const app = express();
const port = 7777;
const router = require('./ROUTER/router');
const cookieParser = require('cookie-parser');
const { createServer } = require('node:http');
const cors = require('cors');
const path = require('path');
const mysocket = require('./BUSINESS/socket');
const server = createServer(app);
const mongoose = require('mongoose');




app.use(cors({
    origin: 'http://localhost:5173',
    method:['get','post'],
    credentials: true 
}));


app.use(cookieParser());


const uri = 'mongodb+srv://hiamsolo:passwordshouldbestrong@cluster0.ar0v8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', err => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


app.use(express.json());


mysocket(server);


app.use('/', router);


server.listen(port, () => {
    console.log('Server started on port', port);
});
