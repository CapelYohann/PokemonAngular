import {Attack} from './Attack';

export interface Pokemon {
  name: string,
  health: number,
  maxHealth: number,
  attack: number,
  attack_spe: number,
  defense: number,
  defense_spe: number,
  speed: number,
  type: string,
  moves?: Attack[],
  chosenMove?: Attack,
  sprite_face: string,
  sprite_back: string
}
