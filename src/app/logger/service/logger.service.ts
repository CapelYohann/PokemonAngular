import { Injectable } from '@angular/core';
import { Line } from '../interface/line';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private log: Line[];

  constructor() {
    this.clear();
  }

  add(log: string, pokemon: string): void {
    this.log.push({ line: log, pokemon: pokemon });
  }

  get(): Line[] {
    return this.log;
  }

  clear(): void {
    this.log = [];
  }
}
