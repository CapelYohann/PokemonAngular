import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private log: string[];

  constructor() {
    this.clear();
  }

  add(str: string): void {
    this.log.push(str);
  }

  get(): string[] {
    return this.log;
  }

  clear(): void {
    this.log = [];
  }
}
