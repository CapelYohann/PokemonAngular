import { TestBed } from '@angular/core/testing';

import { RoundService } from './round.service';
import {Pokemon} from '../../../classes/Pokemon';
import {Attack} from '../../../classes/Attack';
import {Priority} from '../../../classes/Priority';

describe('RoundService', () => {
  let service: RoundService;
  let a: Pokemon;
  let b: Pokemon;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fail to compare attack priority', () => {
    expect(service.getByAttackPriority(a, b)).toBe(undefined);
  });

  it('should fail to compare attack priority', () => {
    expect(service.getFastestPokemon(a, b)).toThrow(new Error("Pokemon  speed is not valid"));
  });

  it('should fail to get order', () => {
    expect(service.getOrder(a, b)).toThrow(new Error('Error move priority'));
  });
});
