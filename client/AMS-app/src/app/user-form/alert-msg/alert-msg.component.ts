import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrl: './alert-msg.component.css'
})
export class AlertMsgComponent {
  @Input() data: string = '';
  constructor() { }
  closeAlert(event: any) {
    let element: any = event.currentTarget.parentElement;
    if (element?.classList.contains('show'))
      element.classList.replace('show', 'hide');
    else
      element.classList.add('hide');

  }
  showSuccessAlert() {
    let successEle = document.querySelector('.success');
    let errorEle = document.querySelector('.error');
    if (successEle?.classList.contains('hide'))
      successEle?.classList.replace('hide', 'show');
    else
      successEle?.classList.add('show');
    if (errorEle?.classList.contains('show'))
      errorEle.classList.replace('show', 'hide');

    setTimeout(() => {
      successEle?.classList.replace('show', 'hide');
    }, 5000);
  }
  showErrorAlert(data: string) {
    this.data = data;
    let successEle = document.querySelector('.success');
    let errorEle = document.querySelector('.error');
    if (errorEle?.classList.contains('hide'))
      errorEle?.classList.replace('hide', 'show');
    else
      errorEle?.classList.add('show');
    if (successEle?.classList.contains('show'))
      successEle.classList.replace('show', 'hide');
    setTimeout(() => {
      errorEle?.classList.replace('show', 'hide');
    }, 5000);
  }
}
