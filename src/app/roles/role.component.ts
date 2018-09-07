import { Component } from '@angular/core';
import { Role } from './role.model';

@Component({

    templateUrl:'./role.component.html'

})
export class RoleComponent{

    model = new Role('','');
    success():void{

        if(this.model.role == null){
            
            alert("Please enter Role");
        }
        alert("Role added successfully");
        
    }
        
    
}