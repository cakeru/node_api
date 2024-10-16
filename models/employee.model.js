const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    first_name:
    {
        type: String,
        required: true
    },
    last_name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
    },
    phone:
    {
        type: Number
    },
},
{
        collection: 'employees',
        timestamp: true
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;