import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../classes/Pokemon'
import { PokemonService } from '../pokemon/service/pokemon.service';
import { Router } from '@angular/router';
import { BattleService } from '../battle/service/battle/battle.service';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  pokemons: Pokemon[] = [];
  IDs = [2, 6, 8, 25, 31, 34, 35, 38, 52, 54, 57, 59, 60, 65, 78, 83, 86, 90, 94, 105, 106, 107, 112, 117, 123, 130, 131, 132, 133, 134, 135, 136, 143, 147, 149, 150, 151];

  p1: Pokemon;
  p2: Pokemon;
  createdPokemon: Pokemon;
  isCreated1: boolean;
  isCreated2: boolean;

  addPokemon = false;

  constructor(private pokemonService: PokemonService, private battleService: BattleService, public router: Router) { }

  ngOnInit(): void {
    this.p1 = this.initPokemon();
    this.p2 = this.initPokemon();
    this.createdPokemon = this.initPokemon();

    this.IDs.forEach(el => {
      this.pokemonService.getPokemonById(el)
        .subscribe(pkmn => {
          this.pokemons.push(pkmn);
        })
    })
  }

  resetPokemon(str: string) {

    if(str === 'p1') {
      this.p1 = this.initPokemon();
    } else {
      this.p2 = this.initPokemon();
    }
  }

  initPokemon(): Pokemon{
    return {
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
    };
  }

  selectCard(p: Pokemon, isCreated: boolean) {
    if(this.p1.name === '') {
      this.p1 = p;
      this.isCreated1 = isCreated;
      console.log(this.isCreated1)
      this.pokemonService.setCreatedPokemon(p, 0);
    } else {
      this.p2 = p;
      this.isCreated2 = isCreated;
      this.pokemonService.setCreatedPokemon(p, 1);
    }
  }

  goToBattle() {
    let pkmn1 = this.isCreated1 ? 'created' : this.p1.name;
    let pkmn2 = this.isCreated2 ? 'created' : this.p2.name;

    this.router.navigate(['/battle/' + pkmn1 + "/" + pkmn2]);
  }

  savePokemon() {
    this.addPokemon = false;
    this.createdPokemon.health = this.createdPokemon.maxHealth;
    console.log(this.createdPokemon)
    this.selectCard(this.createdPokemon, true);
  }

  getTypes(): string[] {
    return this.battleService.getTypes();
  }
}
