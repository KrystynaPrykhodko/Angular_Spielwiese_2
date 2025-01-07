import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateComponent } from './components/create/create.component';
import { TableComponent } from './components/table/table.component';
import { HamburgerComponent } from "./components/hamburger/hamburger.component";
import { BookFormComponent } from "./components/book-form/book-form.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateComponent, TableComponent, SidebarComponent, HamburgerComponent, BookFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen = false;
  isFormVisible = false;
  selectedBook: any = null;

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
        name: '',
        birthDate: null as any as Date,
        nationality: '',
      },
      genre: '',
      price: 0,
    }

    this.showForm();     console.log('->', this.selectedBook);
  }

  showForm() : void { 
    this.isFormVisible = true;
  }

  hideForm() : void {
    this.isFormVisible = false;
  }

}
