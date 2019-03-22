import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  isNavActive: boolean = false;
  public name="Debjit Mahapatra";
  public imagePath="https://www.w3schools.com/w3images/avatar2.png";
  constructor() { }

  ngOnInit() {
  }

  doActive(){
    this.isNavActive = !this.isNavActive;
  }
}
