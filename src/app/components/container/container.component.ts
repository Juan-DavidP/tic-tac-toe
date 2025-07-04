import { Component, inject } from '@angular/core';
import { FieldComponent } from "./field/field.component";
import { GameLogicService } from '../../services/game-logic.service';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [FieldComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  
  service = inject(GameLogicService)

  positions = this.service.positions;

  // Object = Object;
  
}
