import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';
import { PokemonService } from '../pokemon/service/pokemon.service';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let service: PokemonService;
  let fixture: ComponentFixture<SelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorComponent ],
      providers: [PokemonService]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ SelectorComponent ],
      providers: [PokemonService]
    })
    service = TestBed.get(PokemonService);
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should initialize pokemon list', () => {
    component.ngOnInit();
    expect(component.pokemons.length).toBe(37);
  });
});
