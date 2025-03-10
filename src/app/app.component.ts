import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MenuheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-18';
}
