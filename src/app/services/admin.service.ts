import { Injectable,EventEmitter} from '@angular/core';
import { Employee } from '../models/emp.model';

@Injectable()

export class AdminService {

  copyEvent=new EventEmitter<Employee>();
  enableButton:boolean=false;
  shareIndex: number;
  showAlertMessage:boolean=false;
  public alertMessage:string;

    getEmployees:Employee[] =
            [
            {
            'userId':'rirani',
            'jobTitleName':'Developer',
            'firstName':'Romin',
            'lastName':'Irani',
            'preferredFullName':'Romin Irani',
            'employeeCode':'E1',
            'region':'CA',
            'phoneNumber':408-1234567,
            'emailAddress':'romin.k.irani@gmail.com'
            },
            {
            'userId':'nirani',
            'jobTitleName':'Developer',
            'firstName':'Neil',
            'lastName':'Irani',
            'preferredFullName':'Neil Irani',
            'employeeCode':'E2',
            'region':'CA',
            'phoneNumber':408-1111111,
            'emailAddress':'neilrirani@gmail.com'
            },
            {
            'userId':'thanks',
            'jobTitleName':'Program Directory',
            'firstName':'Tom',
            'lastName':'Hanks',
            'preferredFullName':'Tom Hanks',
            'employeeCode':'E3',
            'region':'CA',
            'phoneNumber':408-2222222,
            'emailAddress':'tomhanks@gmail.com'
            },
            {
                'userId':'jhon',
                'jobTitleName':'Manager',
                'firstName':'Jhon',
                'lastName':'Dev',
                'preferredFullName':'Jhon Dev',
                'employeeCode':'E4',
                'region':'CA',
                'phoneNumber':408-2256722,
                'emailAddress':'jhondev@gmail.com'
            },
             {
                    'userId':'Andrew',
                    'jobTitleName':'Tester',
                    'firstName':'Andrew',
                    'lastName':'Hanks',
                    'preferredFullName':'Andrew Hanks',
                    'employeeCode':'E5',
                    'region':'CA',
                    'phoneNumber':408-2222222,
                    'emailAddress':'andrewhanks@gmail.com'
             }

    ]

}

