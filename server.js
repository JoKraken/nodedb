
const mongoose = require('mongoose');

const express = require('express');
const app = express();

mongoose.connect('mongodb://'+ process.env.DB_User +':'+ process.env.DB_PWD + '@'+ process.env.DB_HOST + ':' + process.env.DB_PORT + '/test').then(() => {
    console.log('Connected successfully.');
    app.listen(process.env.APP_PORT);
}, err => {
    console.log('Connection to db failed: ' + err);
});

app.get('/all', (req, res) => {
        res.send("test");
});