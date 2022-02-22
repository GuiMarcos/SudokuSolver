function main() {
    const form = document.querySelector('.form');
    const board = document.querySelector('.allSquares');



    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let sudokuGrid = boardToGrid(board);
        if(!checkSudoku(sudokuGrid)){
            writeHTML("INSERÇÃO INVALIDA");
            return;
        }
        sudokuGrid = resolveSudoku(sudokuGrid);
        setResult(sudokuGrid);
    })

    function boardToGrid(board) {
        let sudokuGrid=new Array(9);

        let squares = [
            board.querySelector('.square1'),
            board.querySelector('.square2'),
            board.querySelector('.square3'),
            board.querySelector('.square4'),
            board.querySelector('.square5'),
            board.querySelector('.square6'),
            board.querySelector('.square7'),
            board.querySelector('.square8'),
            board.querySelector('.square9'),
        ];

        for (let i = 0; i < squares.length; i++)
            sudokuGrid[i] = fillGridLine(squares[i]);

        return sudokuGrid;
    }

    function fillGridLine(square) {
        let lines = [
            square.querySelector('.line1'),
            square.querySelector('.line2'),
            square.querySelector('.line3')
        ];

        let grid = new Array(3);

        for (let i = 0; i < lines.length; i++) {
            grid[i] = fillGridNumber(lines[i]);
        }

        return grid;
    }

    function fillGridNumber(line) {
        let numbers = [
            Number((line.querySelector('.firstNum')).value),
            Number((line.querySelector('.secondNum')).value),
            Number((line.querySelector('.thirdNum')).value)
        ];
        return numbers;
    }

}

main();
