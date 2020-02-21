import { HighlightDirective } from './highlight.directive';
import { Input, Directive , HostBinding, OnInit } from '@angular/core';
import { By } from "@angular/platform-browser";
/*
describe('Directive: HoverFocus', () => {

    let component: TestHoverFocusComponent;
    let fixture: ComponentFixture<TestHoverFocusComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHoverFocusComponent, HoverFocusDirective]
        });
        fixture = TestBed.createComponent(TestHoverFocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });


    it('should create an instance', () => {
	  const directive = new HighlightDirective();
	  expect(directive).toBeTruthy();
	});

    it('hovering over input', () => {
        inputEl.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

        inputEl.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
    });
});



describe('HighlightDirective', () => {

});



@Component({
    template: `<div pkmnHighlight>`
})
class TestHoverFocusComponent {
}


describe('Directive: HoverFocus', () => {

    let component: TestHoverFocusComponent;
    let fixture: ComponentFixture<TestHoverFocusComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHoverFocusComponent, HoverFocusDirective]
        });
        fixture = TestBed.createComponent(TestHoverFocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });

    it('hovering over input', () => {
        inputEl.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

        inputEl.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
    });
});
*/

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });
});