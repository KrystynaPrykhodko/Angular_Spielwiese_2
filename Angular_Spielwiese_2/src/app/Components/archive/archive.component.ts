import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAPIService } from '../../services/openAPI.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-archive',
  imports: [CommonModule, FormsModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
  
})
export class ArchiveComponent implements OnInit, OnDestroy {
  favoriteBook: string = '';
  booksList: string[] = [];
  private subscription: Subscription = new Subscription();
  
  constructor(private openAPIService: OpenAPIService) {}
  
  ngOnInit(): void {       
    this.subscription = this.openAPIService.fetchData().subscribe((data) => {                   
      data.docs.forEach((book: any) => {                       
        if (book.title) {                                
          this.booksList.push(book.title);
        }
      });
      // Autors dupplikate entfernen und sortieren
      this.booksList = Array.from(new Set(this.booksList)).sort();
      //console.log(this.booksList);
    });
  } 

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
