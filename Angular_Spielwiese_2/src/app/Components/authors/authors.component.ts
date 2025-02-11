import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-authors',
  imports: [CommonModule],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authorsList: string[] = [];

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {       
      // API aufrufen
      this.authorsService.getAuthors().subscribe((data) => {                   
        // alle Autoren in authorsList speichern
        data.docs.forEach((book: any) => {                       
          if (book.author_name) {                                             
            this.authorsList.push(...book.author_name);
          }
        });
        // Autors dupplikate entfernen und sortieren
        this.authorsList = Array.from(new Set(this.authorsList)).sort();
        console.log(this.authorsList);
      });
  }
  
}

