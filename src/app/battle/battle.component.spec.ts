import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleComponent } from './battle.component';
import { LoggerService } from './../logger/service/logger.service';
import { Line } from '../logger/interface/line';

class MockLoggerService extends LoggerService {
};

describe('BattleComponent', () => {

  


  let service: MockLoggerService;
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      declarations: [ BattleComponent ],
      providers: [LoggerService]
    });
    // inject both the component and the dependent service.
    component = TestBed.inject(BattleComponent);
    service = TestBed.inject(LoggerService);

  });*/
  beforeEach(() => { (2)
    service = new MockLoggerService();
    component = new BattleComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should start battle', () => {
      expect(component.areFighting).toBe(true);
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
