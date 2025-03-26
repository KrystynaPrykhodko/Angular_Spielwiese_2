import { Book } from '../../models/book.model';

export interface BooksH2State {
  books: Book[];
}

export const initialBooksState: BooksH2State = {
    books: []
}