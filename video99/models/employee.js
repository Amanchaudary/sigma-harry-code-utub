
const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    name: String,
    salary: number,
    language: String,
    city: String,
    isManager: boolean
  });
  const Employee = mongoose.model('Employee', EmployeeSchema);
  module.exports=Employee