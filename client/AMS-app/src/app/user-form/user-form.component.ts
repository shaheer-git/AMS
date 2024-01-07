import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import { AlertMsgComponent } from './alert-msg/alert-msg.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{
  myForm: any;
  errorMsg: string = '';
  @ViewChild('myForm', { static: false })
  ngForm!: NgForm;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    
  }
  createUser(){
    let alertObj = new AlertMsgComponent();
    let req = {
      name: this.ngForm.value.name,
      empConCode: this.ngForm.value.empConCode,
      shift: this.ngForm.value.shift,
      IDEAteam: this.ngForm.value.IDEAteam,
      department: this.ngForm.value.department
    }
    this.dataService.postData(req).subscribe(
      response => {
        console.log('POST success:', response);
        alertObj.showSuccessAlert();
        this.ngForm.resetForm();
      },
      error => {
        console.log('POST error:', error.error.Error);
        this.errorMsg = error.error.Error;
        alertObj.showErrorAlert(this.errorMsg);
        this.ngForm.resetForm();
      }
    );
  }
  
}
