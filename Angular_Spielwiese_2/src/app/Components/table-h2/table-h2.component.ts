import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BookH2 } from '../../models/bookH2.model';
import { AuthorH2 } from '../../models/authorH2.model';
import { Store} from '@ngrx/store';
import { selectAllBooksH2 } from '../../store/booksH2/booksH2.selector';
import { selectAllAuthorsH2 } from '../../store/authorsH2/authorsH2.selector';
import { loadBooksH2 } from '../../store/booksH2/booksH2.actions';
import { loadAuthorsH2 } from '../../store/authorsH2/authorsH2.actions';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponentH2 } from '../../shared/Components/button-h2/button-h2.component';

@Component({
  selector: 'app-table-h2',
  imports: [CommonModule,
            MatTableModule,
            MatIconModule,
            MatButtonModule,
            ButtonComponentH2
  ],
  templateUrl: './table-h2.component.html',
  styleUrl: './table-h2.component.css'
})
export class TableH2Component implements OnInit {
  booksH2$: Observable<BookH2[]>;
  authorsH2$: Observable<AuthorH2[]>;

  booksTableData: BookH2[] = [];


  constructor(private store: Store) {
    this.booksH2$ = this.store.select(selectAllBooksH2);
    this.authorsH2$ = this.store.select(selectAllAuthorsH2);
  }

  ngOnInit() {
    // Bücher laden
    this.store.dispatch(loadBooksH2());

    this.booksH2$.subscribe(books => {
      this.booksTableData = books;
      //console.log('Geladene Bücher aus dem Store:', books);
    });


    // Authoren laden
    this.store.dispatch(loadAuthorsH2());

    this.authorsH2$.subscribe(authors => {
      //console.log('Geladene Autoren aus dem Store:', authors);
    });
  }

  
      editBook(authorH2: AuthorH2): void {
        console.log('editAthorH2');
      }
    
      deleteBook(authorH2: AuthorH2): void {
        console.log('deleteAthorH2');
      }
    
      viewBook(authorH2: AuthorH2): void {
        console.log('viewAthorH2');
      }

}