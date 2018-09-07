import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/emp.model';
import { AdminService} from '../services/admin.service';
import { MESSAGE } from "../constants/message";
import { Router } from '../../../node_modules/@angular/router';


@Component({
 
  templateUrl:'./view.component.html'
  
})
export class ViewComponent  implements OnInit {

 employees:any[];
 constructor(private _adminService: AdminService,
              private _router:Router) {}
 ngOnInit(): void{
    this.employees = this._adminService.getEmployees;
 }
 update(passedEmployee:Employee,index){
   
    this._adminService.enableButton=true;
    this._adminService.shareIndex = index;
    this._adminService.copyEvent.emit(passedEmployee);
    
    console.log("Previos data::"+JSON.stringify(passedEmployee));
    alert("Previos data::"+JSON.stringify(passedEmployee));
    this._router.navigate(['/update']);
  }

  delete(index){
    this._adminService.getEmployees.splice(index, 1);
    alert("Record successfully deleted ");
    this._adminService.alertMessage=MESSAGE.deleted 
   }
                   
  
}