import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public tabs = [
    {
      id: 'flights',
      name: 'Flights',
      icon: 'fa-plane'
    },
    {
      id: 'hotels',
      name: 'Hotels',
      icon: 'fa-hotel'
    },
    {
      id: 'car',
      name: 'Car',
      icon: 'fa-car'
    },
    {
      id: 'activity',
      name: 'Activity',
      icon: 'fa-flag'
    }
  ]

  selectedTab : string = 'flights';

  constructor() { }

  ngOnInit(): void {
  }

  tabClicked(e) {
    this.selectedTab = e.target.value;
  }
}
