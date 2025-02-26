import { TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
  });

  it('should render the component', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

