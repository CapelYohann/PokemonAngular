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
    'pikachu': '#ffbe00',
    'charmander': 'red'
  };

  constructor() { }

  ngOnInit() {
    console.log(this.array[this.pokemon])
    if(this.pokemon)
      this.color = this.array[this.pokemon.toLowerCase()];
  }
}
