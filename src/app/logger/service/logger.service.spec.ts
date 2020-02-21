import { TestBed } from '@angular/core/testing';

import { Line } from '../interface/line';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add one line to log', () => {
  	service.add("one line", "normal");
    expect(service.get().length).toEqual(1);
  });

  it('should add several lines to log', () => {
  	service.add("one line", "normal");
  	service.add("two line", "fire");
  	service.add("three line", "ghost");
    expect(service.get().length).toEqual(3);
  });

  it('added line should contain one pokemon\'s line', () => {
  	service.add("one line", "normal");
  	let added: Line[];
  	added = service.get();
    expect(added[0].pokemon).toBe("normal");
  });

  it('should clear log', () => {
  	service.add("one line", "normal");
  	service.clear();
    expect(service.get().length).toEqual(0);
  });

});
