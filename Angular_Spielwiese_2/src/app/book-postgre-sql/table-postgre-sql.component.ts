import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PostgreSQLService } from '../services/postgreSQL.service';
import { ButtonComponent } from '../button/button.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-table-postgre-sql',
  imports: [
    CommonModule,
    ButtonComponent,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './table-postgre-sql.component.html',
  styleUrl: './table-postgre-sql.component.css'
})
export class TablePostgreSQLComponent implements OnInit, OnDestroy {
  booksPostgreSQLList: Book[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private PostgreSQLService: PostgreSQLService) {}

  ngOnInit(): void {       
    this.refreshData();
  }

  refreshData(): void {
    this.booksPostgreSQLList = [];
    // Alte Subscriptions aufräumen, falls vorhanden
    this.subscription.unsubscribe();
    // API aufrufen
    this.subscription = this.PostgreSQLService.fetchData().subscribe((data) => {         console.log('DATA ->', data);             
      // alle Titles in authorsList speichern
      this.booksPostgreSQLList = data;
      
    });   console.log('--->', this.booksPostgreSQLList);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  editBook(book: Book): void {
      console.log('editBook');
    }
  
    deleteBook(book: Book): void {
      console.log('deleteBook');
    }
  
    viewBook(book: Book): void {
      console.log('viewBook');
    }
}
