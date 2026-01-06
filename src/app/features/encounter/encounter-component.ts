import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-encounter',
  standalone: true,
  imports: [RouterOutlet], // Mandatory to allow sub-routes to render
  templateUrl: './encounter.component.html',
  styleUrl: './encounter.component.css'
})
export class EncounterComponent {
  // You can add logic here that applies to the WHOLE feature,
  // like a "Feature Title" or a specific "Search" state.
}
