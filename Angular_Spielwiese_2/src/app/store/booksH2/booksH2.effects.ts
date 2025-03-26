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
        private actions$: Actions,
        private h2Service: H2Service
    ) {                                                   
        this.loadBooks$ = createEffect(() =>
            this.actions$.pipe(
              ofType(loadBooksH2),
              mergeMap(() =>
                this.h2Service.fetchData().pipe(
                  map(books => {
                    // console.log('Bücher von der API (roh):', books);
                    const transformedBooks = books.map(book => ({
                      ...book,
                      author: {
                        id: book.author?.id ?? 0,
                        name: 'Unbekannt',
                        birthDate: new Date('1970-01-01'),
                        nationality: 'Unbekannt'
                      }
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