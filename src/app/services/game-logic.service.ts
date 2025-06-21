import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  turn = signal("");

  changeValue() {
    if (this.turn() === "" || this.turn() === "O") {
      this.turn.set("X")
    } else {
      this.turn.set("O")
    }
  }
}
