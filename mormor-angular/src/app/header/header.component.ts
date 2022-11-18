import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string = 'Birgitta Alneroth';

  
  constructor() { }

  ngOnInit(): void {

  }

  private getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

}
