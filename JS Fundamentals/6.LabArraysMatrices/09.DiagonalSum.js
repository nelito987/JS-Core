/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(matrix) {
    let firstSum = 0;
    let secondSum = 0;

    for (let row = 0, col=0; row < matrix[0].length, col<matrix[0].length; row++, col++) {
        firstSum+=matrix[row][col];
    }

    for (let row = 0, col=matrix[0].length-1; row < matrix[0].length, col>=0; row++, col--) {
        secondSum+=matrix[row][col];
    }

    console.log(`${firstSum} ${secondSum}`);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);