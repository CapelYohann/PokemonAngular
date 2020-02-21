import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleComponent } from './battle.component';
import { BattleService } from './service/battle/battle.service';
import { PokemonService } from '../pokemon/service/pokemon.service';
import { HttpClient } from '@angular/common/http';

class MockBattleService extends BattleService {
};


class MockPokemonService extends PokemonService {
};

describe('BattleComponent', () => {

  


  let service: MockBattleService;
  let mockPokemonService: MockPokemonService;
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;
  let http: HttpClient;
/*
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleComponent ]
    })
    .compileComponents();
  }));*/

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      declarations: [ BattleComponent ],
      providers: [BattleService]
    });
    fixture = TestBed.createComponent(BattleComponent);
    // inject both the component and the dependent service.
    component = TestBed.inject(BattleComponent);
    service = TestBed.inject(BattleService);

  });
  beforeEach(() => { (2)
    mockPokemonService = new MockPokemonService(http);
    component = new BattleComponent(service, mockPokemonService);
  });

  afterEach(() => {
    mockPokemonService = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should start battle', () => {
      expect(component.areFighting).toBe(false);
  });


  it('should stop battle', () => {
    component.ngOnInit();
    component.stopBattle();
    expect(component.areFighting).toBe(false);
  });

  /*it('should get winner', () => {
    expect(component).toBeTruthy();
  });
  */
});
