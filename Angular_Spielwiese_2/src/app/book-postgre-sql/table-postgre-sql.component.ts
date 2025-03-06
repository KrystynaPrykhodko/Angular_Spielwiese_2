import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PostgreSQLService } from '../services/postgreSQL.service';

@Component({
  selector: 'app-table-postgre-sql',
  imports: [CommonModule],
  templateUrl: './table-postgre-sql.component.html',
  styleUrl: './table-postgre-sql.component.css'
})
export class TablePostgreSQLComponent implements OnInit, OnDestroy {
  booksPostgreSQLList: string[] = [];
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
    this.subscription = this.PostgreSQLService.fetchData().subscribe((data) => {                   
      // alle Titles in authorsList speichern
      data.forEach((book: any) => {                       
        if (book.title) {                                             
          this.booksPostgreSQLList.push(book.title);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
