const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const ejs = require('ejs')

app.use(express.static("public"));
app.set('view engine', 'ejs');

var mongoDatabase = ''

mongoose.Promise = global.Promise

mongoose.connect(mongoDatabase).then(() => {
    console.log('Database connected')
    },
    err => {
        console.log('Database could not be connected: ' + err)  
    });

const employeeRoute = require('./routes/employee.routes')

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use('/employees', employeeRoute);

const server = app.listen(port, function ()  {
    console.log('Connected to port ' + port);
});