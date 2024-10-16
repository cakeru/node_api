const express = require('express');
const app = express();
const employeeRoute = express.Router();
const employeeController = require('../controllers/employee.controller');
const Employee = require('../models/employee.model');

employeeRoute.get('/', employeeController.getEmployees);
employeeRoute.get('/:id', employeeController.getEmployee);
employeeRoute.post('/createEmployee', employeeController.createEmployee);
employeeRoute.put('/updateEmployee/:id', employeeController.updateEmployee);
employeeRoute.delete('/deleteEmployee/:id', employeeController.deleteEmployee);

module.exports = employeeRoute; 