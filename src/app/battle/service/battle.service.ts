import { Injectable } from '@angular/core';
import { LoggerService } from '../../logger/service/logger.service';
import { Round } from '../../classes/Round';
import { Pokemon } from '../../classes/Pokemon'

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  timeoutId: number;
  roundCount = 1;
  round: Round;

  constructor(private logger: LoggerService) { }

  init() {
    this.round = new Round();
  }

  stopBattle(): void {
    clearInterval(this.timeoutId);
  }

  battle(p1: Pokemon, p2: Pokemon, winner: Pokemon, isFightOver: boolean): void {
    this.timeoutId = setInterval(() => {
      this.logger.add("Round " + this.roundCount, null);
      console.log("Round " + this.roundCount);
      this.roundCount++;

      let order = this.round.getOrder(p1, p2);
      this.logger.add(order[0].name + " is attacking using " + order[0].chosenSpell.name + " !", order[0].name);

      let hp = order[1].health;
      if(!this.round.hitPokemon(order[0], order[1])) {
        this.logger.add(order[0].name + " missed !", order[0].name);
      } else {
        this.logger.add(order[0].name + " dealt " + (hp - order[1].health) + "!", order[0].name);
      }

      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner(p1, p2, winner, isFightOver);
        clearInterval(this.timeoutId);
        return;
      }

      this.logger.add(order[1].name + " is attacking using " + order[1].chosenSpell.name + " !", order[1].name);
      hp = order[0].health;
      if(!this.round.hitPokemon(order[1], order[0])) {
        this.logger.add(order[1].name + " missed !", order[1].name);
      } else {
        this.logger.add(order[1].name + " dealt " + (hp - order[0].health) + "!", order[1].name);
      }
      // this.logger.add("<br><br><br>");
      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner(p1, p2, winner, isFightOver);
        clearInterval(this.timeoutId);
        return;
      }
    }, 1000);
  }

  getWinner(p1: Pokemon, p2: Pokemon, winner: Pokemon, isFightOver: boolean) {
    isFightOver = true;
    if(p1.health <= 0) {
      winner = p2;
    } else {
      winner = p1;
    }
  }
}
