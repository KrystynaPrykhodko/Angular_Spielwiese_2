import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs"

@Injectable({
    providedIn: 'root',
})
export class PostgreSQLService {
    private apiURL = 'http://localhost:9090/api/books'

    private booksPostgreSQLSubject = new BehaviorSubject<any[]>([]); // Initial leere Liste
    booksPostgreSQL$ = this.booksPostgreSQLSubject.asObservable(); // Exponiertes Observable für Komponenten

    constructor(private http: HttpClient) {
        this.refreshData(); // Daten beim Start abrufen
    }

    fetchData(): Observable<any> {
        return this.http.get<any>(this.apiURL)
    }

    refreshData(): void {
        this.fetchData().subscribe((data) => {
            this.booksPostgreSQLSubject.next(data);
        });
    }  
}