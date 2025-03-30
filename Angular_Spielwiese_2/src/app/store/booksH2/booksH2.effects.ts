import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions} from "@ngrx/effects";
import { H2Service } from "../../services/H2.service";
import { loadBooksH2, loadBooksH2Success } from "./booksH2.actions";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()
export class BooksH2Effects {
    loadBooks$;

    constructor(
        private actions$: Actions, // Alle Actions, die in der Anwendung ausgelöst werden, werden hier abgefangen
        private h2Service: H2Service
    ) {                                                   
        this.loadBooks$ = createEffect(() =>
            this.actions$.pipe(
              ofType(loadBooksH2), // Wenn die Action loadBooksH2 ausgelöst wird (wird über Komponente dispatcht), dann wird der folgende Code ausgeführt
              mergeMap(() =>
                this.h2Service.fetchBooks().pipe(
                  map(books => {
                    // console.log('Bücher von der API (roh):', books);
                    const transformedBooks = books.map(book => ({    // HIer wird noch nichts transformiert/geändet, sondern dient als Platzhalter
                      ...book
                    }));
                    // console.log('Transformierte Bücher:', transformedBooks);
                    return loadBooksH2Success({ books: transformedBooks });
                  }),
                  catchError(err => {
                    console.error('Fehler beim Laden aus H2-Service:', err);
                    return of({ type: '[Books] Load Books Failed' });
                  })
                )
              )
            )
          );
    }
}