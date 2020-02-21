import { TestBed } from '@angular/core/testing';

import { BattleService } from './battle.service';


class MockLoggerService extends LoggerService {
};

describe('BattleService', () => {
  let service: BattleService;
  let mockService: MockLoggerService;

  /*beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleService);
  });*/


  beforeEach(() => { (2)
    mockService = new MockLoggerService();
    service = new BattleService(mockService);
  });

  afterEach(() => {
    mockService = null;
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize a round', () => {
  	service.init();
    expect(service.get().length).toEqual(1);
  });

  it('should add several lines to log', () => {
  	service.add("one line", "pikachu");
  	service.add("two line", "pikachu");
  	service.add("three line", "pikachu");
    expect(service.get().length).toEqual(3);
  });

  it('added line should contain one pokemon\'s line', () => {
  	service.add("one line", "pikachu");
  	let added: Line[];
  	added = service.get();
    expect(added[0].pokemon).toBe("pikachu");
  });

  it('should clear log', () => {
  	service.add("one line", "pikachu");
  	service.clear();
    expect(service.get().length).toEqual(0);
  });
});
