
import { TestBed } from '@angular/core/testing';
import { AuthorsComponent } from './authors.component';
import { OpenAPIService } from '../../services/openAPI.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AuthorsComponent', () => {
  it('should create the component', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [AuthorsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: OpenAPIService, useValue: { fetchData: jest.fn() } }, // Mock
      ],
    }).createComponent(AuthorsComponent);

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
