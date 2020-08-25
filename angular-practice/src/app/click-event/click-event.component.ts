import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.scss']
})
export class ClickEventComponent implements OnInit {
  heroes = HEROES;
  selectedHero: IHero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero
  }

}
