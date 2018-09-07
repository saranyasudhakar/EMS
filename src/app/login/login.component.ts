import { Component } from '@angular/core';
import { Login } from './login.model';
import {NgForm} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup } from '../../../node_modules/@angular/forms';
@Component({
  /*selector: 'login-comp',*/
  templateUrl:'./login.component.html'
})
export class LoginComponent {
   
 
    constructor(private _route:ActivatedRoute,
        private _router:Router,
        ){}
        
    model = new Login('John','xxxxx'); 
    hasCodelangError= false;
    disableSubmit = false;

    fisrtToUpper(value: string): void{

        if(value.length>0){
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);

        }
        else{
            this.model.firstName = value;
        }
    }
    submitForm(form:NgForm){
        console.log(form.value);

    }
    onBack(): void{
        
        this._router.navigate(['/view']);}
    }

