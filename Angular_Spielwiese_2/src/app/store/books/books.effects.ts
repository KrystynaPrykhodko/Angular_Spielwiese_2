/*
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadBooks, setBooks } from './books.actions';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../../models/book.model';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  // Effekt zum Laden der Bücher aus der JSON-Datei
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks), // Lauscht auf die loadBooks-Aktion
      switchMap(() =>
        this.http.get<Book[]>('/assets/books.json').pipe(
          map((books) => setBooks({ books })) // Setzt die Bücher in den State
        )
      )
    )
  );
}
  */