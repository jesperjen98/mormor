import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})

export class ImageGridComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  images: string[] = [] 
  constructor() {
    for(let i = 0; i < 16; i++) {
      this.images.push("assets/images/" + i + ".jpg");
     }
  }

  ngOnInit(): void {
  }

}

