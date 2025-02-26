import { TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should render the component', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should navigate to "/create" when clicking the "Create" button', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();

    const navigateSpy = jest.spyOn(router, 'navigate'); // Überwacht Router-Navigation
    
    const buttonCreate = fixture.debugElement.query(By.css('#buttonCreate')).nativeElement;
    buttonCreate.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/create']);
  });
});

