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
    
  }

}
