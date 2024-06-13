import { Component } from '@angular/core';
import { PlantillaComponent } from './plantilla/plantilla.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PlantillaComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
