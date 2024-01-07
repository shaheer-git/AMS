import { Component, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
type UserObject = {
  name: String;
  empConCode: Number,
  IDEAteam: String,
  shift: String,
}
@Component({
  selector: 'app-log-in-out',
  templateUrl: './log-in-out.component.html',
  styleUrl: './log-in-out.component.css'
})
export class LogInOutComponent {
  data!: any[];
  inTime!: string;
  outTime!: string;
  displayStyle = 'display:none;';
  @ViewChild('myForm', { static: false })
  ngForm!: NgForm;
  constructor(private dataService: DataService) {

  }
  // ngOnInit(): void {
  //   this.dataService.getData().subscribe((data) => {
  //     this.data = data;
  //   });
  // }
  selectDept() {
    // it will select the records based on departments
    this.dataService.getDataBasedOnDept(this.ngForm.value.department).subscribe(
      data => {
        this.data = data;
      },
      error => {
        alert(error);
      }
    )

  }
  selectLogInOutTime() {
    this.displayStyle = 'display:block;'
  }
  markAttendance() {
    let userName = this.ngForm.value.userName;
    let userObj: UserObject;
    let formReq;
    let time: string;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name.toLowerCase() === userName.toLowerCase()) {
        userObj = this.data[i];
        console.log(userObj);
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        formReq = {
          name: userObj.name,
          empConCode: userObj.empConCode,
          shift: userObj.shift,
          IDEAteam: userObj.IDEAteam,
          hours: hours,
          minutes: minutes
        }
        break;
      }
    }
    if (formReq!) {
      let timing = this.ngForm.value.logInOutTime;
      let url = '';
      if (timing == "LogIn") {
        url = `https://docs.google.com/forms/d/e/1FAIpQLSd0r3r7NvS7Yc7o9uLmzfFMvDbWwc1-PqhdRSoVeqcFaRANKQ/formResponse?usp=sf_link&entry.1186987980=${formReq.name}&entry.144520684=${formReq.empConCode}&entry.732846752=${formReq.IDEAteam}&entry.1865607818=${formReq.shift}`;
      } else {
        url = `https://docs.google.com/forms/d/e/1FAIpQLSd0r3r7NvS7Yc7o9uLmzfFMvDbWwc1-PqhdRSoVeqcFaRANKQ/formResponse?usp=sf_link&entry.1186987980=${formReq.name}&entry.144520684=${formReq.empConCode}&entry.732846752=${formReq.IDEAteam}&entry.1865607818=${formReq.shift}`
      }
      let iframe = document.getElementById('loadGoogleForm');
      iframe?.setAttribute("src", url);
      alert("Submitted ")
    }

  }

}
