// PostgreSQLService - Service zur Verwaltung von Buchdaten aus einer PostgreSQL-Datenbank über eine API
// ===============================================================================================
// 1 Ruft Buchdaten von einer Spring Boot API (mit PostgreSQL-Datenbank) ab und speichert sie im Service.
// 2️ Erstellt ein `BehaviorSubject`, um die Buchdaten zu speichern und allen Komponenten bereitzustellen
// 3️ Ruft Daten direkt von der API ab und speichert sie im `BehaviorSubject`
// 4️ Ermöglicht das erneute Laden der Daten durch `refreshData()`, um Aktualisierungen zu erhalten

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