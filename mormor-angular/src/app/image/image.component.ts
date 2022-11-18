import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  length:number;
  height:number;
  constructor() { 
    this.length = this.getRandomInt(4);
    this.height = this.getRandomInt(3);
  }

  ngOnInit(): void {
  }

  public getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

}
