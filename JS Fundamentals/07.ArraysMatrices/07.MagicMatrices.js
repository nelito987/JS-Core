/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(matrix) {

    let sum = arr => arr.reduce((a, b) => a + b);
    let firstSum = sum(matrix[0]);
    let isMagic = false;

    for(let i=1; i < matrix.length; i++){
        if(sum(matrix[i]) != firstSum){
            isMagic = false;
            break;
        }
        isMagic = true;
    }

    for(let col = 0; col<matrix[0].length; col++){
        let currentSum = 0;
        for(let row = 0; row<matrix.length; row++){
            currentSum += matrix[row][col];
        }
        if(currentSum != firstSum){
            isMagic = false;
            break;
        }
        isMagic = true;
    }

    console.log(isMagic);
}

solve(
    [[11,32,45],[21,0,1],[21,1,1]]
);