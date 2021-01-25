import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  routes: Object[] = [
    {
      title: 'Personas',
      route: '/personas',
      icon:'dashboard',
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
