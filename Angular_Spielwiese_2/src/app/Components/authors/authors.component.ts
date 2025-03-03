import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAPIService } from '../../services/openAPI.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authors',
  imports: [CommonModule],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit, OnDestroy {
  // alles zur API
  authorsList: string[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private openAPIService: OpenAPIService) {}

  ngOnInit(): void {       
    // API aufrufen
    this.subscription = this.openAPIService.fetchData().subscribe((data) => {                   
      // alle Autoren in authorsList speichern
      data.docs.forEach((book: any) => {                       
        if (book.author_name) {                                             
          this.authorsList.push(...book.author_name);
        }
      });
      // Autors dupplikate entfernen und sortieren
      this.authorsList = Array.from(new Set(this.authorsList)).sort();
      //console.log(this.authorsList);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

