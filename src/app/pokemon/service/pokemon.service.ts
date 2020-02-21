import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Pokemon } from '../../classes/Pokemon'

interface IApiPokemon {
  name: string,
  types: {
    slot: number;
    type: {
      name: string;
    }
  }[],
  stats: {
    base_stat: number,
    stat: {
      name: string
    }
  }[],
  sprites: {
    back_default: string,
    front_default: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = "https://pokeapi.co/api/v2/pokemon/";

  createdPokemon1: Pokemon;
  createdPokemon2: Pokemon;

  constructor(private http: HttpClient) { }
  //
  // getPokemons(): Observable<Pokemon> {
  //   return this.http.get<>();
  // }

  setCreatedPokemon(p: Pokemon, id: number): void {
    id === 0 ? this.createdPokemon1 = p : this.createdPokemon2 = p;
  }

  getCreatedPokemon(id: number): Pokemon {
    return id === 0 ? this.createdPokemon1 : this.createdPokemon2;
  }

  getPokemonByName(name: number): Observable<Pokemon> {
    return this.http.get<IApiPokemon>(this.url + name)
      .pipe(map((data: IApiPokemon): Pokemon => {

        let type: string;
        for(let key in data.types) {
          if (!data.types.hasOwnProperty(key)) continue;

          type = data.types[key].type.name;
        }

        return {
          name: data.name,
          health: data.stats.filter(x => x.stat.name === 'hp')[0].base_stat,
          maxHealth: data.stats.filter(x => x.stat.name === 'hp')[0].base_stat,
          attack: data.stats.filter(x => x.stat.name === 'attack')[0].base_stat,
          attack_spe: data.stats.filter(x => x.stat.name === 'special-attack')[0].base_stat,
          defense: data.stats.filter(x => x.stat.name === 'defense')[0].base_stat,
          defense_spe: data.stats.filter(x => x.stat.name === 'special-defense')[0].base_stat,
          speed: data.stats.filter(x => x.stat.name === 'speed')[0].base_stat,
          type: type,
          sprite_face: data.sprites.front_default,
          sprite_back: data.sprites.back_default
        };
      }));
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<IApiPokemon>(this.url + id)
      .pipe(map((data: IApiPokemon): Pokemon => {

        let type: string;
        for(let key in data.types) {
          if (!data.types.hasOwnProperty(key)) continue;

          type = data.types[key].type.name;
        }

        return {
          name: data.name,
          health: data.stats.filter(x => x.stat.name === 'hp')[0].base_stat,
          maxHealth: data.stats.filter(x => x.stat.name === 'hp')[0].base_stat,
          attack: data.stats.filter(x => x.stat.name === 'attack')[0].base_stat,
          attack_spe: data.stats.filter(x => x.stat.name === 'special-attack')[0].base_stat,
          defense: data.stats.filter(x => x.stat.name === 'defense')[0].base_stat,
          defense_spe: data.stats.filter(x => x.stat.name === 'special-defense')[0].base_stat,
          speed: data.stats.filter(x => x.stat.name === 'speed')[0].base_stat,
          type: type,
          sprite_face: data.sprites.front_default,
          sprite_back: data.sprites.back_default
        };
      }));
  }
}
