import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hoverCard() {
    const cardElement = document.querySelector('.card-inner');
    cardElement?.classList.add('hover');
  }

  unhoverCard() {
    const cardElement = document.querySelector('.card-inner');
    cardElement?.classList.remove('hover');
  }

  constructor() { }

  ngOnInit(): void {


  }


  

}
