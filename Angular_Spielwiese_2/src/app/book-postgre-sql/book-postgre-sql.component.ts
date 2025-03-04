import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PostgreSQLService } from '../services/postgreSQL.service';

@Component({
  selector: 'app-book-postgre-sql',
  imports: [CommonModule],
  templateUrl: './book-postgre-sql.component.html',
  styleUrl: './book-postgre-sql.component.css'
})
export class BookPostgreSQLComponent implements OnInit, OnDestroy {
  booksPostgreSQLLIst: string[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private PostgreSQLService: PostgreSQLService) {}

  ngOnInit(): void {
    // API aufrufen
    this.subscription = this.PostgreSQLService.fetchData().subscribe((data) => {
      // alle Bücher in authorsList speichern
      data.docs.forEach((book: any) => {
        if (book.title) {
          this.booksPostgreSQLLIst.push(...book.title);
        }
        console.log(this.booksPostgreSQLLIst);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
