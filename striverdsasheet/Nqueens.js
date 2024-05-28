/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isValid = (board, row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const solve = (board, row) => {
        if (row === n) {
            const solution = board.map(row => row.join(''));
            solutions.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                solve(board, row + 1);
                board[row][col] = '.';
            }
        }
    };

    solve(board, 0);
    return solutions;
};