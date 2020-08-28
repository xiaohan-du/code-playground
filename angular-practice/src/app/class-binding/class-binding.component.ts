import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { IHero } from '../hero';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  heroes = HEROES;
  selectedHero: IHero;

  constructor() { }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
