import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CreateComponent } from './Components/create/create.component';
import { TableComponent } from './Components/table/table.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateComponent, TableComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Spielwiese_2';
}
