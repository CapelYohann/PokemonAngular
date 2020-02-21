import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../classes/Pokemon'
import { Priority } from '../classes/Priority';
import { Attack } from '../classes/Attack';
import { BattleService } from './service/battle/battle.service';
import { PokemonService } from '../pokemon/service/pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LoggerService } from '../logger/service/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  p1: Pokemon;
  p2: Pokemon;
  winner: Pokemon;

  areFighting = false;
  isFightOver = false;

  constructor(private battle: BattleService, private pokemonService: PokemonService, private route: ActivatedRoute, private loggerService: LoggerService, private router: Router) { }

  ngOnInit(): void {
    this.loggerService.clear();

    const a_attack = new Attack('Attack physique !', .3, 60, 'normal', true, Priority.High);
    const b_attack = new Attack('Attack spéciale !', .3, 60, 'fire', false, Priority.Low);

    this.route.params
       .subscribe((params: Params): void => {
         let param = params.p1;
         if(param === 'created') {
           this.p1 = this.pokemonService.getCreatedPokemon(0);
           a_attack.type = this.p1.type;
           this.p1.chosenMove = a_attack;
         } else {
           this.pokemonService.getPokemonByName(param)
           .subscribe((data: Pokemon) => {
               this.p1 = data;
               a_attack.type = this.p1.type;
               this.p1.chosenMove = a_attack;
               console.log(this.p1);
             });
         }
       });

       this.route.params
        .subscribe((params: Params): void => {
          let param = params.p2;
          if(param === 'created') {
            this.p2 = this.pokemonService.getCreatedPokemon(1);
            b_attack.type = this.p2.type;
            this.p2.chosenMove = b_attack;
          } else {
            this.pokemonService.getPokemonByName(param)
              .subscribe((data: Pokemon) => {
                this.p2 = data;
                b_attack.type = this.p2.type;
                this.p2.chosenMove = b_attack;
              });
            }
          });
  }

  startBattle(): void  {
    this.areFighting = true;
    this.battle.battle(this.p1, this.p2, this.winner, this.isFightOver);
  }

  stopBattle(): void {
    this.areFighting = false;
    this.battle.stopBattle();
  }

  return(): void {
    this.router.navigate(['/selector']);
  }
}
