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