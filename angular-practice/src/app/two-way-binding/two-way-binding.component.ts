import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero'

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})

export class TwoWayBindingComponent implements OnInit {

  hero: IHero = {
    id: 1,
    name: 'Antman'
  }
  constructor() { }
  ngOnInit() {

  }
}