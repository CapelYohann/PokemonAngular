import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemon } from '../../classes/Pokemon';
import { Attack } from '../../classes/Attack';
import { Priority } from '../../classes/Priority';
import { PkmnFightComponent } from './pkmn-fight.component';

describe('PkmnFightComponent', () => {
  let component: PkmnFightComponent;
  let fixture: ComponentFixture<PkmnFightComponent>;
  let p1: Pokemon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkmnFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmnFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /*it('should initialize fighting pokemon', () => {
    const a_attack = new Attack('Vive attaque', .3, 65, 'electric', true, Priority.High);
    this.p1 = new Pokemon('Pikachu', 100, 100, 50, 30, 20, 20, 1, 'NORMAL', undefined, a_attack);
    component.pokemon = p1;
    component.facing = "front";
    expect(component.pokemon.name).toBe("Pikachu");
  });*/

});
