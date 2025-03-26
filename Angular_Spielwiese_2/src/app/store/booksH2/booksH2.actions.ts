import { createAction, props } from '@ngrx/store';
import { BookH2 } from '../../models/bookH2.model';

export const loadBooksH2 = createAction('[Books] Load Books');

export const loadBooksH2Success = createAction(
    '[Books H2] Load Books Success',
    props<{ books: BookH2[] }>()
);