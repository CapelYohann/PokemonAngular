import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, ViewChild} from '@angular/core';
import { LoggerComponent } from './logger.component';

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let view;
  let fixture: ComponentFixture<LoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    //view = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should initialize logger with on-hold battle', () => {
      expect(view.textContent).toContain('');
    });*/
});
