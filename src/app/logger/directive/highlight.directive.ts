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

  @Input() type: string;
  public type_index = [

  ];

  array: IArray = {
    // 'pikachu': '#ffbe00',
    // 'charmander': 'red'
    "fighting": '#D35400',
    "flying": '#85C1E9',
    "poison": '#6C3483',
    "ground": '#AF601A',
    "rock": '#5F6A6A',
    "bug": '#7DCEA0',
    "ghost": '#C39BD3',
    "steel": '#34495E',
    "fire": '#F39C12',
    "water": '#2874A6',
    "grass": '#196F3D',
    "electric": '#F1C40F',
    "psychic": '#D91DA3',
    "ice": '#73DDFF',
    "dragon": '#7B241C',
    "fairy": '#FF83FD',
  };

  constructor() { }

  ngOnInit() {
    console.log(this.array[this.type])
    if(this.type)
      this.color = this.array[this.type.toLowerCase()];
  }
}
