import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/employees/';

  constructor(private http :HttpClient) { }

  addEmployee(emp:Employee){
    return this.http.post('http://localhost:3000/employees', emp);
  }

  getEmployeeList() {
    return this.http.get<Employee[]>(this.url);
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateEmployee(emp:Employee){
    return this.http.put(`${this.url}/${emp._id}`, emp);
  }
}
