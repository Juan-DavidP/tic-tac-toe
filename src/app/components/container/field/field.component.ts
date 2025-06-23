import { Component, inject, input, signal, WritableSignal } from '@angular/core';
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
  service = inject(GameLogicService);

  value = this.service.turn();
  id = input.required<number>();
  // referencia a signal para obtener el estado actual de una form más ágil
  gameOver: WritableSignal<boolean> = this.service.gameOver;

  changeValue() {
    this.service.changeValue()
    this.value = this.service.turn()
    this.service.setGamePosition(this.id())
    console.log(this.gameOver());

  }
}
