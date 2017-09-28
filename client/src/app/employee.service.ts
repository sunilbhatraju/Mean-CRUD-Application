import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Employee } from './employee'
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }
  
    //retrieving EmployeeService
    getEmployees()
    {
      return this.http.get('http://localhost:3000/api/employees')
        .map(res => res.json());
    }
  
    //add employee method
    addEmployee(newEmployee)
    {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/api/employee',newEmployee,{headers:headers})
        .map(res => res.json());
    }
    //delete method
    deleteEmployee(id) {
      return this.http.delete('http://localhost:3000/api/employee/'+id)
        .map(res => res.json());
    }
  }