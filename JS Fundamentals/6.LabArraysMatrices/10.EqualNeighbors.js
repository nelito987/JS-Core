/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(matrix) {
    let count = 0;

    let rows = matrix.length-1;
    let cols = matrix[0].length;
    for(let row =0; row < matrix.length; row++){
        for(let col = 0; col< matrix[row].length; col ++){
            /*if(matrix[row][col] == matrix[row+1][col] ||
                matrix[row][col] == matrix[row-1][col] ||
                matrix[row][col] == matrix[row][col-1] ||
                matrix[row][col] == matrix[row][col+1] ){
                count++;
            }*/
            if(row>0){
                if(matrix[row][col] == matrix[row-1][col]){
                    count++;
                }
            }
            if(col>0){
                if(matrix[row][col] == matrix[row][col-1]){
                    count++;
                }
            }
            if(row< matrix.length-1){
                if(matrix[row][col]== matrix[row+1][col]){
                    count++;
                }
            }
            if(col< matrix[row].length){
                if(matrix[row][col]== matrix[row][col+1]){
                    count++;
                }
            }

        }
    }
    console.log(count/2);
}

solve([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]
);