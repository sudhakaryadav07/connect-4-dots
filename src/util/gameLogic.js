async function checkWin(grid, player, row, column) {
    // console.log(grid,player,row,column)
    var connectNumber = 4;
    var deltaSteps = connectNumber - 1;
    // var gridSize = grid.length - 1;
    var matchedIndices = [];

    function checkRow() {
        let startRow = row - deltaSteps;
        let endRow = row + deltaSteps;
        let elements = [], indices = [];
        for (let i = startRow; i <= endRow; i++) {
            if (grid[i] && grid[i][column]) {
                elements.push(grid[i][column])
                indices.push({ r: i, c: column })
            }
        }
        return matchPattern(elements, indices);
    }

    function checkColumn() {
        let startColumn = column - deltaSteps;
        let endColumn = column + deltaSteps;
        let elements = [], indices = [];
        for (let i = startColumn; i <= endColumn; i++) {
            if (grid[row] && grid[row][i]) {
                elements.push(grid[row][i])
                indices.push({ r: row, c: i })
            }
        }
        return matchPattern(elements, indices);
    }

    function checkBackwardDiagonal() {
        let startRow = row - deltaSteps;
        let endRow = row + deltaSteps;
        let startColumn = column - deltaSteps;
        // let endColumn = column + deltaSteps;
        let elements = [], indices = [];
        for (let i = startRow, j = startColumn; i <= endRow; i++, j++) {
            if (grid[i] && grid[i][j]) {
                elements.push(grid[i][j])
                indices.push({ r: i, c: j })
            }
        }
        return matchPattern(elements, indices);
    }

    function checkForwardDiagonal() {
        let startRow = row - deltaSteps;
        let endRow = row + deltaSteps;
        let startColumn = column + deltaSteps;
        // let endColumn = column + deltaSteps;
        let elements = [], indices = [];
        for (let i = startRow, j = startColumn; i <= endRow; i++, j--) {
            if (grid[i] && grid[i][j]) {
                elements.push(grid[i][j])
                indices.push({ r: i, c: j })
            }
        }
        return matchPattern(elements, indices);
    }

    function matchPattern(elements, indices) {
        let winPattern = Array(connectNumber).fill(player).join("");
        let examinePattern = elements.join("");
        // console.log(winPattern, examinePattern)
        let matchIndex = examinePattern.indexOf(winPattern);
        // console.log(matchIndex)
        let win = matchIndex != -1;
        matchedIndices = win ? indices.splice(matchIndex, 4) : [];
        return win;
    }

    let rowCheck = await checkRow(grid, player, row, column)
    let columnCheck = rowCheck || await checkColumn(grid, player, row, column)
    let bDiagonalCheck = columnCheck || await checkBackwardDiagonal(grid, player, row, column)
    let fDiagonalCheck = bDiagonalCheck || await checkForwardDiagonal(grid, player, row, column)
    // console.log(rowCheck, columnCheck, bDiagonalCheck, fDiagonalCheck)
    // console.log(row, column)
    // for(let u =0 ;u < grid.length ; u ++){
    //     console.log(JSON.stringify(grid[u]))
    // }
    return { win: fDiagonalCheck, winPattern: matchedIndices }
}

export { checkWin }


