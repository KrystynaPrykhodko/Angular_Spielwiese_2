import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { AppState } from '../../store/app.state';
import { selectAllBooks } from '../../store/books/books.selectors';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports: [DatePipe, CommonModule],
})
export class TableComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books$ = this.store.select(selectAllBooks);
  }

  ngOnInit(): void {
    // Kein explizites Laden nötig, da die Mock-Daten bereits im State sind
    this.books$.subscribe((books) => {
      console.log('Books aus Store:', books); // Überprüfen, ob die Bücher geladen werden
    });
  }

  editBook(book: Book): void {
    console.log('Buch bearbeiten:', book);
  }

  deleteBook(book: Book): void {
    console.log('Buch bearbeiten:', book);
  }

  viewBook(book: Book): void {
    console.log('Buch bearbeiten:', book);
  }
}
