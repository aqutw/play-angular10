import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  str1 = 'string111';
  obj = {
    a: 1,
    b: 2
  };
  currentVal = '';
  arr = [
    'a1',
    'b2'];
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
}
