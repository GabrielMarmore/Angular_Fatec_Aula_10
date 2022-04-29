import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marmore',
  templateUrl: './marmore.component.html',
  styleUrls: ['./marmore.component.css']
})
export class MarmoreComponent implements OnInit {
  isShown: boolean;
  constructor() {
    this.isShown = false;
  }

  ngOnInit() {
  }

  descShow(){
    this.isShown = ! this.isShown;
  }

}