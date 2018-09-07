import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Employee } from '../models/emp.model';
import { AdminService } from '../services/admin.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { MESSAGE } from '../constants/message';


@Component({

    templateUrl: 'addemp.component.html'

})
export class AddEmpComponent {
  public empObj:Employee;
  public showAlertMessage:boolean=false;
  constructor(public employeeService: AdminService,
              private router:Router,
              private route:ActivatedRoute) {
   }

  ngOnInit(){

    this.empObj = new Employee('Jmethew','Developer','Jhon','Methew','JhonMethew','E1','CA',34567671,'abc@aa.com');
    this.employeeService.copyEvent.subscribe(
      (rcvEmpObj:Employee)=>{
        this.empObj=rcvEmpObj;
      }
    )
  }

  public updateRecord :boolean =false;
  submit(){
    this.employeeService.getEmployees.push(this.empObj);
  }

  save(updatedEmp:Employee){
    console.log("Updated Record ::"+JSON.stringify(updatedEmp));
    this.employeeService.getEmployees[this.employeeService.shareIndex]=updatedEmp;
    this.employeeService.showAlertMessage=true;
    this.employeeService.alertMessage=MESSAGE.update;
  }
 
    
   /* model = new Employee('Jmethew','Developer','Jhon','Methew','JhonMethew','E1','CA',34567,'abc@aa.com');*/
   
    fisrtToUpper(value: string): void{

        if(value.length>0){
            this.empObj.firstName = value.charAt(0).toUpperCase() + value.slice(1);

        }
        else{
            this.empObj.firstName = value;
        }
    }
 }
    
    
   
