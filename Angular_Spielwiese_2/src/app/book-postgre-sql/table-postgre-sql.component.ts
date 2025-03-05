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
    // Automatische Aktualisierung, wenn sich die Daten im Service ändern
    
    this.subscription = this.PostgreSQLService.booksPostgreSQL$.subscribe((data) => {   
      this.booksPostgreSQLList = []; // Liste leeren
                                                                               
      data.forEach((book: any) => {
        if (book.title) {    
          this.booksPostgreSQLList.push(book.title);
        }
        console.log(this.booksPostgreSQLList);
      });
    });
  }

  refreshData(): void {
    this.PostgreSQLService.refreshData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
