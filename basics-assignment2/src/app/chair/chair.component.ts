import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  username: string = "Initial name";
  constructor() { }

  ngOnInit(): void {
  }

  isEmptyUsername(){
    return this.username.length == 0;
  }

  onClearUsername(){
    this.username = '';
  }
}
