import Board from './board';
import Play from './play';

const gamesBoard = new Board(4);
gamesBoard.createBoard();
const game = new Play(gamesBoard);
game.init();
