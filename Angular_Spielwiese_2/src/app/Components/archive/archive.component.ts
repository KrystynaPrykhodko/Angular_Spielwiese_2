import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenAPIService } from '../../services/openAPI.service';

@Component({
  selector: 'app-archive',
  imports: [CommonModule],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent implements OnInit {
  booksList: string[] = [];
  
  constructor(private openAPIService: OpenAPIService) {}
  
  ngOnInit(): void {       
    // API aufrufen
    this.openAPIService.fetchData().subscribe((data) => {                   
      // alle Autoren in authorsList speichern
      data.docs.forEach((book: any) => {                       
        if (book.title) {                                
          this.booksList.push(book.title);
        }
      });
      // Autors dupplikate entfernen und sortieren
      this.booksList = Array.from(new Set(this.booksList)).sort();
      console.log(this.booksList);
    });
  } 
}
