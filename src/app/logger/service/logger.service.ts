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

  add(log: string, type: string): void {
    this.log.push({ line: log, type: type });
  }

  get(): Line[] {
    return this.log;
  }

  clear(): void {
    this.log = [];
  }
}
