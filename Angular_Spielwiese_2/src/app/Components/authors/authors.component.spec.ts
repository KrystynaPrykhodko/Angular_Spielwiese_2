import { TestBed } from '@angular/core/testing';
import { AuthorsComponent } from './authors.component';
import { OpenAPIService } from '../../services/openAPI.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AuthorsComponent', () => {
  let fixture: any;
  let component: AuthorsComponent;

  beforeEach(async () => {
    const mockData = { docs: [{ author_name: ['John Doe'] }, { author_name: ['Jane Smith'] }] };
    
    await TestBed.configureTestingModule({
      imports: [AuthorsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { 
          provide: OpenAPIService, 
          useValue: { fetchData: jest.fn().mockReturnValue(of(mockData)) }, // Simuliert API-Daten
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (fixture) {
        fixture.destroy();
    }
    TestBed.resetTestingModule();
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
