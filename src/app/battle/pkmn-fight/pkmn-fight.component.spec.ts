import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnFightComponent } from './pkmn-fight.component';

describe('PkmnFightComponent', () => {
  let component: PkmnFightComponent;
  let fixture: ComponentFixture<PkmnFightComponent>;

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
});
