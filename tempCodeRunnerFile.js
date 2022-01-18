const matrix1 = [[1, 2], [3, 4], [5, 6]];
function matrixTransp(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
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