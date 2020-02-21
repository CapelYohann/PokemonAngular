import { Injectable } from '@angular/core';
import { LoggerService } from '../../../logger/service/logger.service';
import { Pokemon } from '../../../classes/Pokemon'
import { RoundService } from '../round/round.service'
import { DecimalPipe } from '@angular/common';

import { interval, Subscriber, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  timeoutId: number;
  roundCount = 1;
  source = interval(1000);
  subscriber; // : Subscriber;

  public type_index = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "fairy"
  ];

  public type_ratio = [
    [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1], // fire
    [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 0.5], // fighting
    [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1], //flying
    [1, 1, 1, 0.5,0.5,0.5,1,0.5,0,1,1,2,1,1,1,1,2], // poison
    [1,1,0,2,1,2,0.5,1,2,2,1,0.5,2,1,1,1,1], // ground
    [1,0.5,2,1,0.5,1,2,1,0.5,2,1,1,1,1,2,1,1], //rock
    [1,0.5,0.5,0.5,1,1,1,0.5,0.5,0.5,1,2,1,2,1,1,0.5], // bug
    [0,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1], // ghost
    [1,1,1,1,1,2,1,1,0.5,0.5,0.5,1,0.5,1,2,1,2], // steel
    [1,1,1,1,1,0.5,2,1,2,0.5,0.5,2,1,1,2,0.5,1], // fire
    [1,1,1,1,2,2,1,1,1,2,0.5,0.5,1,1,1,0.5,1], // water
    [1,1,0.5,0.5,2,2,0.5,1,0.5,0.5,2,0.5,1,1,1,0.5,1], // grass
    [1,1,2,1,0,1,1,1,1,1,2,0.5,0.5,1,1,0.5,1], // electric
    [1,2,1,2,1,1,1,1,0.5,1,1,1,1,0.5,1,1,1], // psychic
    [1,1,2,1,2,1,1,1,0.5,0.5,0.5,2,1,1,0.5,2,1], // ice
    [1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,2,0], // dragon
    [1,2,1,0.5,1,1,1,1,0.5,0.5,1,1,1,1,1,2,1] // fairy
  ];

  constructor(private roundService: RoundService, private logger: LoggerService, private decimalPipe: DecimalPipe) { }

  getTypes(): string[] {
    return this.type_index;
  }
  
  stopBattle(): void {
    // clearInterval(this.timeoutId);
    this.subscriber.unsubscribe();
  }

  battle(p1: Pokemon, p2: Pokemon, winner: Pokemon, isFightOver: boolean): void {
    let damages: number = 0;

    this.subscriber = this.source.subscribe(() => {
      this.logger.add("Round " + this.roundCount, null);
      console.log("Round " + this.roundCount);
      this.roundCount++;

      let order = this.roundService.getOrder(p1, p2);
      this.logger.add(order[0].name + " is attacking using " + order[0].chosenMove.name + " !", order[0].name);

      let hp = order[1].health;
      if((damages = this.hitPokemon(order[0], order[1])) === 0) {
        this.logger.add(order[0].name + " missed !", order[0].name);
      } else {
        this.logger.add(order[0].name + " dealt " + damages + "!", order[0].name);
      }

      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner(p1, p2, winner, isFightOver);
        clearInterval(this.timeoutId);
        return;
      }

      this.logger.add(order[1].name + " is attacking using " + order[1].chosenMove.name + " !", order[1].name);
      hp = order[0].health;
      if((damages = this.hitPokemon(order[1], order[0])) === 0) {
        this.logger.add(order[1].name + " missed !", order[1].name);
      } else {
        this.logger.add(order[1].name + " dealt " + damages + "!", order[1].name);
      }

      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner(p1, p2, winner, isFightOver);
        clearInterval(this.timeoutId);
        return;
      }
    })
  }

  getWinner(p1: Pokemon, p2: Pokemon, winner: Pokemon, isFightOver: boolean) {
    isFightOver = true;
    if(p1.health <= 0) {
      winner = p2;
    } else {
      winner = p1;
    }
    this.subscriber.unsubscribe();
  }

  hitPokemon(attacker: Pokemon, defenser: Pokemon): number {
    console.log("touch")
    let touch = attacker.chosenMove.attackTouch()
    console.log(touch)
    if(attacker.chosenMove && touch) {
      let damages = +this.decimalPipe.transform(this.calculcateDamages(attacker, defenser), '1.0-0');
      if(damages > 0) {
        defenser.health -= damages;
        if(defenser.health < 0)
          defenser.health = 0;
        return damages;
      }
    }

    return 0;
  }

  calculcateDamages(p1: Pokemon, p2: Pokemon): number {
    if(p1.chosenMove) {
      let damages = 0;
      if(p1.chosenMove.physical){
          damages += (p1.attack) * p1.chosenMove.damages;
          if(p1.type === p1.chosenMove.type){
              damages *= 1.5;
          }
          damages *= this.type_ratio[this.type_index.indexOf(p1.chosenMove.type)][this.type_index.indexOf(p2.type)]
          damages = damages - p2.defense / 4;
      }else{
          damages += (p1.attack_spe) * p1.chosenMove.damages;
          if(p1.type === p1.chosenMove.type){
              damages *= 1.5;
          }

          damages *= this.type_ratio[this.type_index.indexOf(p1.chosenMove.type)][this.type_index.indexOf(p2.type)]

          damages = damages - p2.defense_spe / 4;
      }

      this.logger.add(""+damages, p1.name);
      return damages;
    }
    return 0;
  }
}
