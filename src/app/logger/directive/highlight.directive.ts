import { Input, Directive , HostBinding, OnInit } from '@angular/core';
import { Pokemon } from '../../classes/Pokemon'

interface IArray {
  [name: string]: string;
}

@Directive({
  selector: '[pkmnHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.color') color = '';

  @Input() pokemon: string;
  array: IArray = {
    'Pikachu': '#ffbe00',
    'Salameche': 'red'
  };

  constructor() { }

  ngOnInit() {
    console.log(this.array[this.pokemon])
    this.color = this.array[this.pokemon];
  }
}
