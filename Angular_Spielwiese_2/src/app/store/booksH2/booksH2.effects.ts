import { Store } from '@ngrx/store'; // ganz oben hinzufügen
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { H2Service } from "../../services/H2.service";
import {
  loadBooksH2,
  loadBooksH2Success,
  createBookH2,
  createBookH2Success
} from "./booksH2.actions";
import { map, tap, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()
export class BooksH2Effects {
    loadBooks$;
    createBook$;

    constructor(
        private actions$: Actions, // Alle Actions, die in der Anwendung ausgelöst werden, werden hier abgefangen
        private h2Service: H2Service,
        private store: Store
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

        // Buch erstellen
      this.createBook$ = createEffect(() =>
        this.actions$.pipe(
          ofType(createBookH2),
          mergeMap(({ book }) =>
            this.h2Service.createBook(book).pipe(
              tap(() => this.store.dispatch(loadBooksH2())),
              map(() => createBookH2Success()),
              catchError(error => {
                console.error('Fehler beim Erstellen des Buches:', error);
                return of({ type: '[Books H2] Create Book Failed' });
              })
            )
          )
        )
      );
  }
}
