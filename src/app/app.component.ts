import { Component } from '@angular/core';


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alerts: Alert[];
  constructor() {
    this.reset();
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  reset() {
    this.alerts = Array.from(ALERTS);
  }

  isShow = true;
  showFlag = 'yes';
  color = 'green';
  title = 'youtube';
  str1 = 'string111';
  linkHref = '';
  buttonDisabled = true;
  obj = {
    a: 1,
    b: 2
  };
  currentVal = '';
  arr = [
    'a1',
    'b2'];
  arr2 = [
      {nnn: 'nna1'},
      {nnn: 'b2'}];
  aryUsers = [
    {name:'Tony1', age:11},
    {name:'Tony2', age:12},
    {name:'Tony3', age:13},
  ];
  siteUrl = window.location.href;
  getName(): string{
    return 'peter';
  }
  alertName(name){
    alert(`Hi, ${name}`);
  }
  myEvent(param1){
    console.warn(param1);
  }
  getVal(v){
    this.currentVal = v;
    this.str1 = v;
    console.log(v);
  }
  setProperty(){
    this.buttonDisabled = false;
    this.linkHref = 'http://google.com';
  }
  getFormValues(val){
    console.warn(val)
  }
  updateColor(){
    this.color = 'purple';
  }
}
