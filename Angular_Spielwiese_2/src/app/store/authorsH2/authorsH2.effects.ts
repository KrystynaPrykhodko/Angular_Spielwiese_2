import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions} from "@ngrx/effects";
import { H2Service } from "../../services/H2.service";
import { loadAuthorsH2, loadAuthorsH2Success } from "./authorsH2.actions";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()
export class AuthorsH2Effects {
    loadAuthors$;

    constructor(
        private actions$: Actions, // Alle Actions, die in der Anwendung ausgelöst werden, werden hier abgefangen
        private h2Service: H2Service
    ) {                                                   
        this.loadAuthors$ = createEffect(() =>
            this.actions$.pipe(
              ofType(loadAuthorsH2), // Wenn die Action loadBooksH2 ausgelöst wird (wird über Komponente dispatcht), dann wird der folgende Code ausgeführt
              mergeMap(() =>
                this.h2Service.fetchAuthors().pipe(
                  map(authors => {
                    // console.log('Bücher von der API (roh):', books);
                    const transformedAuthors = authors.map(author => ({    // HIer wird noch nichts transformiert/geändet, sondern dient als Platzhalter
                      ...author
                    }));
                    // console.log('Transformierte Bücher:', transformedBooks);
                    return loadAuthorsH2Success({ authors: transformedAuthors });
                  }),
                  catchError(err => {
                    console.error('Fehler beim Laden aus H2-Service:', err);
                    return of({ type: '[Authors] Load Authors Failed' });
                  })
                )
              )
            )
          );
    }
}