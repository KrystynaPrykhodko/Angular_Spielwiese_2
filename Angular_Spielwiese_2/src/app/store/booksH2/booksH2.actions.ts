import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const loadBooksH2 = createAction('[Books] Load Books');

export const loadBooksH2Success = createAction(
    '[Books] Load Books Success',
    props<{ books: Book[] }>()
);