import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { OpenAPIService } from './openAPI.service';

describe('OpenAPIService', () => {
  let service: OpenAPIService;
  let httpMock: HttpTestingController;

  beforeEach(() => {   // Erstellt eine Testumgebung mit dem OpenAPIService und HttpClient
    TestBed.configureTestingModule({
      providers: [
        OpenAPIService,
        provideHttpClient(), // Stellt sicher, dass HttpClient in den Tests verfügbar ist
        provideHttpClientTesting() // Ersetzt das veraltete HttpClientTestingModule
      ],
    });

    service = TestBed.inject(OpenAPIService); // erstellt eine Instanz des OpenAPIService
    httpMock = TestBed.inject(HttpTestingController); // erstellt eine Instanz des HttpTestingController (erstellt ein Mock-Objekt für HTTP-Anfragen)
  });

  afterEach(() => {
    httpMock.verify(); // Stellt sicher, dass keine unerwarteten HTTP-Anfragen offen sind (Falls ein Test fehlschlägt, kann eine API-Anfrage offen bleiben und den nächsten Test beeinflussen)
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Stellt sicher, dass OpenAPIService erfolgreich initialisiert wurde (ob existiert)
  });

  it('should fetch data from API', () => {
    const mockResponse = { docs: [{ author_name: ['J.K. Rowling'] }] };

    service.fetchData().subscribe((data) => {  // service.fetchData() ruft die API auf (Mock), gibt die Antwort zurück und prüft, ob die Antwort korrekt ist
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['apiURL']); // httpMock.expectOne(service['apiURL']) prüft, ob exakt eine Anfrage an apiURL gesendet wurde 
    expect(req.request.method).toBe('GET');  // req.flush(mockResponse) gibt die Testdaten zurück, als ob die API geantwortet hätte
    req.flush(mockResponse); // expect(data).toEqual(mockResponse) stellt sicher, dass die Daten korrekt übernommen wurden
  });
});