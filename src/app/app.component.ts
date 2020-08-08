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
  arr = [
    'a1',
    'b2'];
  siteUrl = window.location.href;
  getName(): string{
    return 'peter';
  }
}
