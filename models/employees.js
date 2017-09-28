const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    designation:{
      type: String,
      required: true
    },
    salary:{
      type: String,
      required: true
    }
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);