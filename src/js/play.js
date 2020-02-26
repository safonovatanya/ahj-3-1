/* eslint-disable class-methods-use-this */
export default class Play {
  constructor(tablet) {
    this.oldPosition = 0;
    this.newPosition = 0;
    this.strike = 0;
    this.numberStrike = document.getElementById('points');
    this.overshoot = 0;
    this.tablet = tablet;
    this.boardSize = tablet.boardSize;
    this.interval = 0;
  }

  init() {
    this.tablet.board.addEventListener('click', (e) => {
      this.boardClick(e);
    });
    this.jumpImg();
  }

  boardClick(e) {
    if (e.target.id !== 'goblin') {
      return;
    }
    this.additionNumberStrike();
    this.clearingCell(e.target);
  }

  additionNumberStrike() {
    this.overshoot = 0;
    this.strike += 1;
    this.numberStrike.innerHTML = this.strike;
  }

  clearingCell(e) {
    const Goblin = e;
    Goblin.parentNode.innerHTML = '';
  }

  jumpImg() {
    this.interval = setInterval(() => {
      this.changePosition();
    }, 1000);
  }

  changePosition() {
    do {
      this.newPosition = Math.floor(Math.random() * this.boardSize);
    } while (this.newPosition === this.oldPosition);
    if (this.oldPosition >= 0) {
      const oldItemField = document.getElementById(`field${this.oldPosition}`);
      oldItemField.innerHTML = '';
    }
    const itemField = document.getElementById(`field${this.newPosition}`);
    itemField.innerHTML = '<img id = "goblin" src = "./goblin.png">';
    this.oldPosition = this.newPosition;
    this.overshoot += 1;
    if (this.overshoot > 5) {
      clearInterval(this.interval);
      alert('GAME OVER');
    }
  }
}
