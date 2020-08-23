import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero'

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})

export class TwoWayBindingComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Antman'
  }
  constructor(){}
  ngOnInit () {

  }
}