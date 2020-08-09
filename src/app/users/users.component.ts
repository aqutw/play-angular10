import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() user;
  @Output() userFunc:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.warn('this.user', this.user);
    this.userFunc.emit("string111 from parentFunc emit");
  }

}
