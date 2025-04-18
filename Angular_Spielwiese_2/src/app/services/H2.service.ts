// H2Service - Service zur Verwaltung von Buchdaten über einer H2 Datenbank über Spring Boot
// ================================================================================

import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BookH2 } from "../models/bookH2.model"
import { AuthorH2 } from "../models/authorH2.model"

@Injectable({
    providedIn: 'root',
})
export class H2Service {
    private bookApiURL = 'http://localhost:7070/api/v1/book'
    private authorApiURL = 'http://localhost:7070/api/v1/author'

    constructor(private http: HttpClient) {}

    // books
    fetchBooks(): Observable<BookH2[]> {
        return this.http.get<BookH2[]>(this.bookApiURL)
    }

    createBook(book: BookH2): Observable<void> {
        return this.http.post<void>(this.bookApiURL, book);
    }

    deleteBook(bookId: number): Observable<void> {
        return this.http.delete<void>(`${this.bookApiURL}/${bookId}`);
      }

    // authors
    fetchAuthors(): Observable<AuthorH2[]> {
        return this.http.get<AuthorH2[]>(this.authorApiURL);
    }
    
}