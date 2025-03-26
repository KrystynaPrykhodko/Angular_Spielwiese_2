// H2Service - Service zur Verwaltung von Buchdaten über einer H2 Datenbank über Spring Boot
// ================================================================================

import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Book } from "../models/book.model"

@Injectable({
    providedIn: 'root',
})
export class H2Service {
    private apiURL = 'http://localhost:7070/api/v1/book'

    constructor(private http: HttpClient) {}

    fetchData(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiURL)
    }
}