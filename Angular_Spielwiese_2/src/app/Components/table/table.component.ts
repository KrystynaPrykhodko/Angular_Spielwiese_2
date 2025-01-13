import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { AppState } from '../../store/app.state';
import { selectAllBooks } from '../../store/books/books.selectors';
import { DatePipe, CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Router } from '@angular/router'; 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [
    DatePipe, 
    CommonModule, 
    MatTableModule, 
    MatButtonModule, 
    MatIconModule],
})
export class TableComponent implements OnInit {                    
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>, private router: Router) {
  this.books$ = this.store.select(selectAllBooks);
  }

  ngOnInit(): void {
    // Kein explizites Laden nötig, da die Mock-Daten bereits im State sind
    this.books$.subscribe((books) => {
      console.log('Books aus Store:', books); // Überprüfen, ob die Bücher geladen werden
    });
  }

  editBook(book: Book): void {
    this.router.navigate(['/edit', book.id]);
  }

  deleteBook(book: Book): void {
    this.router.navigate(['/delete', book.id]);
  }

  viewBook(book: Book): void {
    this.router.navigate(['/view', book.id]);
  }

  createBook(): void {  
    this.router.navigate(['/create']);
  }

}
