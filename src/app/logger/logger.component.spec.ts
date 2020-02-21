import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import { LoggerComponent } from './logger.component';
import { LoggerService } from './service/logger.service';
import { Line } from './interface/line';


@Component({
  selector: 'logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})

class ActLine implements Line{
  line: string;
  pokemon: string;
};

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let fixture: ComponentFixture<LoggerComponent>;
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [LoggerComponent],
        providers: [LoggerService]
    }); 

    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    //view = fixture.debugElement.nativeElement;
    //fixture.detectChanges();

        service = TestBed.inject(LoggerService);

  });

  it('should create', () => {
      let l = new ActLine();
      l.line = "test";
      l.pokemon = "pok";
        spyOn(service, "get").and.returnValue(l);
        expect(component.getLogs()).toBeTruthy();
        expect(service.get()).toHaveBeenCalled();
  });

/*
  it('should add one line to log from component', () => {
    service.add("one line", "pikachu");
    expect(component.getLogs().length).toEqual(1);
  });
*/

  /*it('should initialize logger with on-hold battle', () => {
      expect(view.textContent).toContain('');
    });*/
});
