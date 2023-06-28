import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
 
  id:number=0;
  employees: Employee = new Employee();
  constructor (private route: ActivatedRoute, private employeeService: EmployeeService){}


  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.employees = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      if (Array.isArray(data)) {
        this.employees = data[0];
      } else {
        this.employees = data;
      }
    });
  }

}
