import { Component, inject } from '@angular/core';
import { FieldComponent } from "./field/field.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [FieldComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  
  
}
