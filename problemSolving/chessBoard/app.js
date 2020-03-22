/* eslint-disable no-unused-expressions */
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  function printBoard(element) {
    for (let i = 0; i <= 62; i++) {
      const board = document.createElement('div');
      board.classList.add('box');
      element.appendChild(board);
      if (i % 2 === 0) board.style.background = '#333';
      board.addEventListener('click', () => {
        if (i % 2 === 0) {
          board.style.background = '#f2fe';
        }
      });
    }
  }

  printBoard(app);
});
