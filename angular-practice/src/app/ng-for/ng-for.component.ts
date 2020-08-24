import { Component, OnInit } from '@angular/core';
/* import { Hero } from '../hero'; */
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})

export class NgForComponent implements OnInit {
  heroes = HEROES;
  /* heroes: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ] */
  constructor() {

  }
  ngOnInit() {

  }
}