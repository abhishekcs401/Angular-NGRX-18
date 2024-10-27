import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../Material.Module';



@Component({
  selector: 'app-menuheader',
  standalone: true,
  imports: [RouterLink,MaterialModule],
  templateUrl: './menuheader.component.html',
  styleUrl: './menuheader.component.css'
})
export class MenuheaderComponent {

}
