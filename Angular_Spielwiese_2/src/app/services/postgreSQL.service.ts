// PostgreSQLService - Service zur Verwaltung von Buchdaten aus einer PostgreSQL-Datenbank über eine API
// =====================================================================================================

import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root',
})
export class PostgreSQLService {
    private apiURL = 'http://localhost:9090/api/books'

    constructor(private http: HttpClient) {}

    fetchData(): Observable<any> {
        return this.http.get<any>(this.apiURL)
    }
}