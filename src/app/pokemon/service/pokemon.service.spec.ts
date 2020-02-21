import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

import {  HttpClient } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonService,
        { provide: HttpClient, useValue: { log: jasmine.createSpy() } }
      ]
    });
    // service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make request to get pokemon', () => {
    const service = TestBed.get(PokemonService);
    expect(service.getPokemonByName("charizard")).toBeTruthy();
  });
});
