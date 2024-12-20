import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CreateComponent } from './Components/create/create.component';
import { TableComponent } from './Components/table/table.component';
import { HamburgerComponent } from "./Components/hamburger/hamburger.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateComponent, TableComponent, SidebarComponent, HamburgerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen = false;

  toggleSidebar() : void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
