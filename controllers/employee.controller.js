const Employee = require('../models/employee.model')

const getEmployees = async (req, res) => {
    try {
        const employee = await Employee.find({})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(201).json(employee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateEmployee = async (req, res) => {
    try {
        const {id} = req.params
        const employee = await Employee.findByIdAndUpdate(id, req.body)
        res.status(200).json(employee)
        if (!employee) {
            res.status(404).json({ message: 'Employee not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params
        const employee = await Employee.findByIdAndDelete(id)
        res.status(200).json(employee)
        if (!employee) {
            res.status(404).json({ message: 'Employee not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}