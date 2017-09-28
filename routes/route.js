const express = require('express');
const router = express.Router();

const Employee = require('../models/employees');

//retrieving employees
router.get('/employees', (req,res ,next)=>{
    Employee.find(function (err, employees) {
        res.json(employees);
    })
});

//add employee
router.post('/employee',(req,res, next)=>{
    let newEmployee = new Employee({
        name:req.body.name,
        designation: req.body.designation,
        salary: req.body.salary
    
      });

      newEmployee.save((err, employee)=>{
        if(err)
        {
          res.json({msg: 'Failed to add employee'});
        }
        else{
          res.json({msg: 'Employee added successfuly'});
        }
      });
});

//delete employees
router.delete('/employee/:id',(req,res, next)=>{
    Employee.remove({_id: req.params.id}, function (err, result) {
        if (err)
        {
          res.json(err);
        }
        else {
          res.json(result);
        }
    });
  });
  


module.exports = router;