import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../classes/Pokemon'
import { Battle } from '../classes/Battle';
import { Priority } from '../classes/Priority';
import { Attack } from '../classes/Attack';
import { Round } from '../classes/Round';
import { LoggerService } from '../logger/service/logger.service'

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  p1: Pokemon;
  p2: Pokemon;
  winner: Pokemon;

  timeoutId: number;
  roundCount = 1;
  round: Round;
  areFighting = false;
  isFightOver = false;

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    const a_attack = new Attack('Vive attaque', 40, 70, Priority.Low);
    const b_attack = new Attack('Fire bolt', 60, 40, Priority.High);
    this.p1 = new Pokemon('Pikachu', 100, 100, 30, 20, 1, undefined, a_attack);
    this.p2 = new Pokemon('Salameche', 100, 100, 30, 20, 1, undefined, b_attack);

    this.round = new Round();
    // this.battle();
  }

  stopBattle(): void {
    this.areFighting = false;
    clearInterval(this.timeoutId);
  }

  battle(): void {
    this.areFighting = true;
    this.timeoutId = setInterval(() => {
      this.logger.add("Round " + this.roundCount);
      console.log("Round " + this.roundCount);
      this.roundCount++;

      let order = this.round.getOrder(this.p1, this.p2);
      this.logger.add(order[0].name + " is attacking using " + order[0].chosenSpell.name + " !");

      let hp = order[1].health;
      if(!this.round.hitPokemon(order[0], order[1])) {
        this.logger.add(order[0].name + " missed !");
      } else {
        this.logger.add(order[0].name + " dealt " + (hp - order[1].health) + "!");
      }

      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner();
        clearInterval(this.timeoutId);
        return;
      }

      this.logger.add(order[1].name + " is attacking using " + order[1].chosenSpell.name + " !");
      hp = order[0].health;
      if(!this.round.hitPokemon(order[1], order[0])) {
        this.logger.add(order[1].name + " missed !");
      } else {
        this.logger.add(order[1].name + " dealt " + (hp - order[0].health) + "!");
      }
      // this.logger.add("<br><br><br>");
      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner();
        clearInterval(this.timeoutId);
        return;
      }
    }, 1000);
  }

  getWinner() {
    this.isFightOver = true;
    // let winner: Pokemon;
    if(this.p1.health <= 0) {
      this.winner = this.p2;
    } else {
      this.winner = this.p1;
    }
    // console.log(this.log)
    // this.logger.add(winner.name + " won !");
    // console.log(winner.name + " won !");
  }
}
