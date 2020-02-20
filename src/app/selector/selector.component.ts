import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../classes/Pokemon'
import { PokemonService } from '../pokemon/service/pokemon.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  pokemons: Pokemon[] = [];
  IDs = [2, 6, 8, 25, 31, 34, 35, 38, 52, 54, 57, 59, 60, 65, 78, 83, 86, 90, 94, 105, 106, 107, 112, 117, 123, 130, 131, 132, 133, 134, 135, 136, 143, 147, 149, 150, 151];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.IDs.forEach(el => {
      this.pokemonService.getPokemonById(el)
        .subscribe(pkmn => {
          this.pokemons.push(pkmn)
        })
    })
  }

}
