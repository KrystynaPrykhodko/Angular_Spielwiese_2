import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BookH2 } from '../../models/bookH2.model';
import { Store, select } from '@ngrx/store';
import { selectAllBooksH2 } from '../../store/booksH2/booksH2.selector';
import { loadBooksH2 } from '../../store/booksH2/booksH2.actions';

@Component({
  selector: 'app-table-h2',
  imports: [CommonModule],
  templateUrl: './table-h2.component.html',
  styleUrl: './table-h2.component.css'
})
export class TableH2Component implements OnInit {
  booksH2$: Observable<BookH2[]>;

  constructor(private store: Store) {
    this.booksH2$ = this.store.pipe(select(selectAllBooksH2));
  }

  ngOnInit() {
    this.store.dispatch(loadBooksH2());

    this.booksH2$.subscribe(books => {
      console.log('Geladene Bücher aus dem Store:', books);
    });
  }
}