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
  // sidebar
  isSidebarOpen = false;

  toggleSidebar() : void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // formular
  isFormVisible = false;

  showForm() : void { 
    this.isFormVisible = true;
  }
}
