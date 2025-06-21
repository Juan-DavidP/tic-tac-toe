import { Component, inject } from '@angular/core';
import { GameLogicService } from '../../../services/game-logic.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent {
  service = inject(GameLogicService)

  value = this.service.turn()

  changeValue() {
    this.service.changeValue()
    this.value = this.service.turn()
  }

}
