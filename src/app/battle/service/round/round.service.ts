import { Injectable } from '@angular/core';
import {Pokemon} from '../../../classes/Pokemon';
import {Attack} from '../../../classes/Attack';
import {Priority} from '../../../classes/Priority';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  constructor() { }

  getByAttackPriority(a: Pokemon, b: Pokemon) : Pokemon | null | undefined {
    console.log(a)
    console.log(b)
    if (a.chosenMove && b.chosenMove) {
      if ( a.chosenMove.priority > b.chosenMove.priority) {
        return a;
      } else if (b.chosenMove.priority > a.chosenMove.priority) {
        return b;
      } else {
        return null;
      }
    }

    return undefined;
  }

  getFastestPokemon(a: Pokemon, b: Pokemon): Pokemon | never {
    if(a.speed < 1)
      throw new Error("Pokemon " + a.name + " speed is not valid");
    else  if(b.speed < 1)
      throw new Error("Pokemon " + b.name + " speed is not valid");

    return a.speed > b.speed ? a : b;
  }

  getOrder(a: Pokemon, b: Pokemon): Pokemon[] | never {
    let res = this.getByAttackPriority(a, b);

    console.log("res = " + res)
    if(res === null) {
      res = this.getFastestPokemon(a, b);
      return res === a ? [a, b] : [b, a];
    } else if(res !== undefined) {
      return res === a ? [a, b] : [b, a];
    }

    throw new Error('Error move priority');
  }
}
