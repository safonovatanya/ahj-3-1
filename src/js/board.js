export default class Board {
  constructor() {
    this.boardSize = 4 * 4;
    this.board = document.getElementById('board');
  }

  createBoard() {
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'field';
      itemBoard.id = `field${i}`;
      this.board.appendChild(itemBoard);
    }
  }
}
