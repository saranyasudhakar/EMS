import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';
import { AddEmpComponent } from './addemp/addemp.component';
import { AdminService } from './services/admin.service';
import { RoleComponent } from './roles/role.component';
import { RegComponent } from './register/reg.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './notfound.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ViewComponent,
    AddEmpComponent,
    RoleComponent,
    RegComponent,
    UpdateComponent,
    NotFoundComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([   
                 {path: 'login', component:LoginComponent},
                 {path: 'home', component:HomeComponent},
                 {path: 'admin', component:AdminComponent},
                 {path: 'users', component:UserComponent},
                 {path: 'view', component:ViewComponent},
                 {path: 'addemp', component:AddEmpComponent},
                 {path: 'roles', component:RoleComponent},
                 {path: 'register', component:RegComponent},
                 {path: 'update', component:UpdateComponent},
                 {path: '', redirectTo:'home', pathMatch:'full'},
                 {path:'**', component:NotFoundComponent}
  ]),
  ],
  bootstrap: [
       AppComponent
  ],
  providers:[
    AdminService
  ]
})

export class AppModule { }
