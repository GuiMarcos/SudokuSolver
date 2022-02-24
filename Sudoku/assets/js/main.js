function main() {
    const container = document.querySelector('.container');
    const form = container.querySelector('.form');
    const board = form.querySelector('.tableSudoku');
    const solvedBoard = form.querySelector('.solvedBoard')

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let sudokuGrid = boardToGrid(board);
        solveSudoku(sudokuGrid);
    })

    function boardToGrid(board) {
        let sudokuGrid = new Array(9);

        let rows = [
            board.querySelector('.linha1'),
            board.querySelector('.linha2'),
            board.querySelector('.linha3'),
            board.querySelector('.linha4'),
            board.querySelector('.linha5'),
            board.querySelector('.linha6'),
            board.querySelector('.linha7'),
            board.querySelector('.linha8'),
            board.querySelector('.linha9'),
        ];

        for (let row in rows)
            sudokuGrid[row] = fillGridLine(rows[row]);

        return sudokuGrid;
    }

    function fillGridLine(row) {
        let numbers = [
            Number((row.querySelector('.num1')).value),
            Number((row.querySelector('.num2')).value),
            Number((row.querySelector('.num3')).value),
            Number((row.querySelector('.num4')).value),
            Number((row.querySelector('.num5')).value),
            Number((row.querySelector('.num6')).value),
            Number((row.querySelector('.num7')).value),
            Number((row.querySelector('.num8')).value),
            Number((row.querySelector('.num9')).value)
        ];

        return numbers;
    }

    function solveSudoku(sudokuGrid) {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let row in sudokuGrid) {
            for (let column in sudokuGrid[row]) {
                if (sudokuGrid[row][column] === 0) {
                    for (let n of numbers) {
                        if (isPossible(row, column, n, sudokuGrid)) {
                            sudokuGrid[row][column] = n;
                            solveSudoku(sudokuGrid);
                            sudokuGrid[row][column] = 0;
                        }
                    }
                    return;
                }
            }
        }
        printSolve(sudokuGrid);
    }

    function isPossible(row, column, n, sudokuGrid) {
        if (!checkRow(n, row, sudokuGrid))
            return false;
        else if (!checkColumn(n, column, sudokuGrid))
            return false;
        else if (!checkSquare(n, row, column, sudokuGrid))
            return false;

        return true;
    }

    function checkRow(n, row, sudokuGrid) {
        for (let column in sudokuGrid[row]) {
            if (sudokuGrid[row][column] === n) {
                return false
            }
        }
        return true;
    }

    function checkColumn(n, column, sudokuGrid) {
        for (let row in sudokuGrid) {
            if (sudokuGrid[row][column] === n) {
                return false
            }
        }
        return true;
    }

    function checkSquare(n, row, column, sudokuGrid) {
        let tam = 3;
        if (row < tam && column < tam) {

        } else if (row < tam && column < tam * 2) {
            for (let i = 0; i < tam; i++) {
                for (let j = tam; j < tam * 2; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        } else if (row < tam && column < tam * 3) {
            for (let i = 0; i < tam; i++) {
                for (let j = tam * 2; j < tam * 3; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        } else if (row < tam * 2 && column < tam) {
            for (let i = tam; i < tam * 2; i++) {
                for (let j = 0; j < tam; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        } else if (row < tam * 2 && column < tam * 2) {
            for (let i = tam; i < tam * 2; i++) {
                for (let j = tam; j < tam * 2; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        } else if (row < tam * 2 && column < tam * 3) {
            for (let i = tam; i < tam * 2; i++) {
                for (let j = tam * 2; j < tam * 3; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        } else if (row < tam * 3 && column < tam) {
            for (let i = tam * 2; i < tam * 3; i++) {
                for (let j = 0; j < tam; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        } else if (row < tam * 3 && column < tam * 2) {
            for (let i = tam * 2; i < tam * 3; i++) {
                for (let j = tam; j < tam * 2; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        } else {
            for (let i = tam * 2; i < tam * 3; i++) {
                for (let j = tam * 2; j < tam * 3; j++) {
                    if (sudokuGrid[i][j] === n) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    function printSolve(sudokuGrid) {
        const header = document.querySelector('.header2');
        header.style.display = 'block';

        const result = document.querySelector('.result')
        result.style.display = 'block'

        const boardSolved = result.querySelector('.solvedSudoku');


        const rows = [
            row1 = boardSolved.querySelector('.linha1'),
            row2 = boardSolved.querySelector('.linha2'),
            row3 = boardSolved.querySelector('.linha3'),
            row4 = boardSolved.querySelector('.linha4'),
            row5 = boardSolved.querySelector('.linha5'),
            row6 = boardSolved.querySelector('.linha6'),
            row7 = boardSolved.querySelector('.linha7'),
            row8 = boardSolved.querySelector('.linha8'),
            row9 = boardSolved.querySelector('.linha9'),
        ]



        for (let row of rows) {
            column = [
                num1 = row.querySelector('#num1'),
                num2 = row.querySelector('#num2'),
                num3 = row.querySelector('#num3'),
                num4 = row.querySelector('#num4'),
                num5 = row.querySelector('#num5'),
                num6 = row.querySelector('#num6'),
                num7 = row.querySelector('#num7'),
                num8 = row.querySelector('#num8'),
                num9 = row.querySelector('#num9'),
            ];

            for (let j = 0; j < 9; j++) {
                column[j].innerHTML = `${sudokuGrid[rows.indexOf(row)][j]}`;
            }
        }
    }

}

main();
