const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort((a, b) => (a % 2 - b % 2) || (a % 2 ? b - a : a - b));
console.log(arHw);


const matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function matrixTransp(matrix) {
    const rows = matrix.length,
          cols = matrix[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
        grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[j][i] = matrix[i][j];
        }
    }
    console.log(grid);
}
matrixTransp(matrix1);