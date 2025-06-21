import { Component, inject } from '@angular/core';
import { GameLogicService } from '../../services/game-logic.service';
@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {

  service = inject(GameLogicService)
}
