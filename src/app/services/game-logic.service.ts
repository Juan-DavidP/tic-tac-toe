import { Injectable, signal } from '@angular/core';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  /* lógica anterior
  positions: Position = {0: "X",1: "O",2: "X",3: "O",4: "X",5: "O",6: "X",7: "O",8: "X",}*/

  possibilities: number[][] = [
    [0, 1, 2], // Horizontal superior
    [3, 4, 5], // Horizontal media
    [6, 7, 8], // Horizontal inferior
    [0, 3, 6], // Vertical izquierda
    [1, 4, 7], // Vertical centro
    [2, 5, 8], // Vertical derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundaria
  ]; // 4, 3, 6, 8

  turn = signal("");
  // gamedPosition: Position[] = []; lógica anterior
  gameTurn = 0;
  positionsX: number[] = [];
  positionsO: number[] = [];

  changeValue(): void {
    if (this.turn() === "" || this.turn() === "O") {
      this.turn.set("X")
    } else {
      this.turn.set("O")
    }
    setTimeout(() => {
      this.gameWon()
    }, 10);
  }



  setGamePosition(position: number): void {
    if (this.turn() === "X") {
      this.positionsX.push(position)
    } else {
      this.positionsO.push(position)
    }
    this.gameTurn += 1;
  }

  gameWon() {

    if (this.gameTurn >= 5) {
      for (let index = 0; index < this.possibilities.length; index++) {
        const currentPossibility = this.possibilities[index];

        const xWins = this.possibilities[index].every(pos => this.positionsX.includes(pos));
        /*every recorre todos los elementos de un array y ejecuta una función validando
          si esta es true para continuar en caso tal de ser false ya no continua la 
          ejecución y devolvera false ya que solo regresa true si se cumple para todos
          los elementos
        */
        if (xWins) {
          alert("¡Ganador X!");
          return;
        }

        const oWins = currentPossibility.every(pos => this.positionsO.includes(pos));
        if (oWins) {
          alert("¡Ganador O!");
          return;
        }
      }
    }
    if (this.gameTurn === 9) {
      alert("empate")
    }
  }
}
