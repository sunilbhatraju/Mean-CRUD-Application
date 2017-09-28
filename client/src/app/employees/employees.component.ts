import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  employee: Employee;
  name: string;
  designation: string;
  salary: string;

  constructor(private employeeService: EmployeeService) { } //dependency injection

  addEmployee()
  {
    const newEmployee = {
      name: this.name,
      designation: this.designation,
      salary: this.salary
    }
    this.employeeService.addEmployee(newEmployee)
        .subscribe(employee => {
          this.employees.push(employee);
          this.employeeService.getEmployees()
          .subscribe( employees =>
            this.employees = employees);
        });
  }

  deleteEmployee(id:any)
  {
    var employees = this.employees;
    this.employeeService.deleteEmployee(id)
        .subscribe(data => {
          if(data.n==1)
          {
            for(var i=0; i< employees.length;i++)
            {
              if(employees[i]._id == id)
              {
                employees.splice(i,1);
              }
            }
          }
        })
  }
  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe( employees =>
      this.employees = employees);
    }
}
