import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../classes/Pokemon'
import { Battle } from '../classes/Battle';
import { Priority } from '../classes/Priority';
import { Attack } from '../classes/Attack';
import { BattleService } from './service/battle.service';

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

  constructor(private battle: BattleService) { }

  ngOnInit(): void {
    const a_attack = new Attack('Vive attaque', 40, 65, Priority.Low);
    const b_attack = new Attack('Fire bolt', 60, 45, Priority.High);
    this.p1 = new Pokemon('Pikachu', 100, 100, 30, 20, 1, undefined, a_attack);
    this.p2 = new Pokemon('Salameche', 100, 100, 30, 20, 1, undefined, b_attack);

    this.battle.init();
  }

  startBattle(): void  {
    this.areFighting = true;
    this.battle.battle(this.p1, this.p2, this.winner, this.isFightOver);
  }

  stopBattle(): void {
    this.areFighting = false;
    this.battle.stopBattle();
  }
}
