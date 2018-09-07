import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { employee } from '../models/employee.model';
import { Router } from '../../../node_modules/@angular/router';


@Component({

    templateUrl: 'update.component.html'

})
export class UpdateComponent {
    languages=['AngularJs','ReactJs','NodeJs'];
    model = new employee('John','Methew','abc@aa.com','abcde',true,'Male','AngularJs');
    hasCodelangError= false;
    disableSubmit = false;
    constructor(
        private _router:Router) {}
    fisrtToUpper(value: string): void{

        if(value.length>0){
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);

        }
        else{
            this.model.firstName = value;
        }
    }
    validateCodeLang(event): void{
        if(this.model.codelang==='default'){
            this.hasCodelangError= true;
            this.disableSubmit= true;
        }
        else{
            this.hasCodelangError= false;
            this.disableSubmit= false;
        }
    }
    
    submitForm(form:NgForm){
        console.log(form.value);
        alert("The updated data is:  "+JSON.stringify(form.value));
    }
    GoToView():void{

        this._router.navigate(['/view']);

    }
}