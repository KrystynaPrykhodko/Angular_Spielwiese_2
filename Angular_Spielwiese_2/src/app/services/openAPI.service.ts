// OpenAPIService - Service zur Kommunikation mit der Open Library API
// ====================================================================
// 1️ Ruft Daten direkt von der Open Library API ab
// 2️ Stellt eine Methode `fetchData()` bereit, die als Observable die API-Daten liefert
// 3️ Keine Speicherung oder Caching – die Daten werden direkt in der Komponente verarbeitet
// 4️ Wird von Komponenten aufgerufen, um aktuelle Buchinformationen abzurufen

import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root',
})
export class OpenAPIService {
    private apiURL = 'https://openlibrary.org/search.json?q=Harry%20Potter'

    constructor(private http: HttpClient) {}

    fetchData(): Observable<any> {
        return this.http.get<any>(this.apiURL)
    }
}