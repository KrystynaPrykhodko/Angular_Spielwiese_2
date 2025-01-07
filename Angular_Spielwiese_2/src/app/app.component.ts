import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HamburgerComponent } from "./components/hamburger/hamburger.component";
import { Book } from './models/book.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HamburgerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen = false;
  selectedBook: Book | null = null;

  toggleSidebar() : void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  showFormForCreate() : void {
    this.selectedBook = {
      id: 0, // Temporär oder generisch
      title: '',
      publicationDate: null as any as Date,
      author: {
        id: 0,
        name: 'autor',
        birthDate: null as any as Date,
        nationality: '',
      },
      genre: '',
      price: 0,
    }
  }
}
