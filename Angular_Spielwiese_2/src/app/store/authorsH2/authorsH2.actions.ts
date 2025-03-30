import { createAction, props } from '@ngrx/store';
import { AuthorH2 } from '../../models/authorH2.model';

export const loadAuthorsH2 = createAction('[Authors] Signal to Load Authors');

export const loadAuthorsH2Success = createAction(
    '[Authors H2] Load Authors Success',
    props<{ authors: AuthorH2[] }>()
);