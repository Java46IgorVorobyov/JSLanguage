const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
let odds = arHw.filter((a) => a % 2 !== 0).sort((a, b) => b - a);
let even = arHw.filter((a) => a % 2 === 0).sort((a, b) => a - b);
let sorted = even.concat(odds);
console.log(sorted);



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