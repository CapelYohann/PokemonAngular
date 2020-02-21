import { TestBed } from '@angular/core/testing';

import { BattleService } from './battle.service';
import { LoggerService } from '../../../logger/service/logger.service';
import { Pokemon } from '../../../classes/Pokemon';
import { RoundService } from '../round/round.service';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../../../pokemon/service/pokemon.service';

class MockLoggerService extends LoggerService {
};

class MockRoundService extends RoundService {
};

class MockPokemonService extends PokemonService {
};



describe('BattleService', () => {
  let service: BattleService;
  /*let mockService: MockLoggerService;
  let mockRoundService: MockRoundService;
  let http: HttpClient;

  let mockPokemonService: MockPokemonService;
  let decimalPipe: DecimalPipe;
  let p1: Observable<Pokemon> ;
  let p2: Observable<Pokemon> ;
  let p1Ob: Observable<Pokemon> ;
  let p2Ob: Observable<Pokemon> ;
  let winner: Pokemon;
*/

  /*beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleService);
  });


  beforeEach(() => { (2)
    mockService = new MockLoggerService();
    mockRoundService = new MockRoundService();
    mockPokemonService = new MockPokemonService(http);
    service = new BattleService(mockRoundService, mockService, decimalPipe);
  });

  afterEach(() => {
    mockRoundService = null;
    mockService = null;
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*it('should initialize a round', () => {
    p1Ob = mockPokemonService.getPokemonById(2);
    p2Ob = mockPokemonService.getPokemonById(4);
    let isFightOver :boolean = false;
    p1.name = p1Ob.name;
    p2.name = p2Ob.name;
  	service.battle(p1, p2, winner, isFightOver);
    expect(isFightOver).toEqual(false);
  });*/

});
