import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

// Optionale Actions für zukünftige Erweiterungen
export const loadBooks = createAction('[Books] Load Books');
export const createBook = createAction('[Books] Create Book', props<{ book: Book }>());