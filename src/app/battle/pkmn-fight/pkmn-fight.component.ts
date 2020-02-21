import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../classes/Pokemon'

@Component({
  selector: 'pkmn-fight',
  templateUrl: './pkmn-fight.component.html',
  styleUrls: ['./pkmn-fight.component.css']
})
export class PkmnFightComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() facing: string;

  constructor() { }

  ngOnInit(): void {
    this.pokemon = {
      name: '',
      health: 0,
      maxHealth: 0,
      attack: 0,
      attack_spe: 0,
      defense: 0,
      defense_spe: 0,
      speed: 0,
      type: '',
      sprite_face: '',
      sprite_back: ''
    }
  }

}
