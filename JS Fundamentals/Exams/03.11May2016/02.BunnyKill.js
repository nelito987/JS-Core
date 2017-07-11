/**
 * Created by nkondova on 9.6.2017 г..
 */
function solve(input) {
    let bombs = input.pop().split(/[\s,]+/g).map(Number);
    let matrix = input.map(l => l.split(' ').map(Number));
    let bombDamage = 0;
    let totalDamage = 0;

    for(let b = 0; b < bombs.length; b+=2){
        let x = bombs[b];
        let y = bombs[b+1];
        if(matrix[x][y] > 0){
            bombDamage = matrix[x][y];
        }

        if(x>0 && y >=0 && y < matrix.length){
            matrix[x-1][y] -= bombDamage;

        }else if(x>0 && y>0){
            matrix[x-1][y-1] -= bombDamage;
        }else if(x>0 && y < matrix.length){
            matrix[x-1][y+1] -= bombDamage;
        }else if(y > 0){
            matrix[x][y-1] -= bombDamage;
        }else if(y < matrix.length){

        }
    }



}

solve(
    ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1']);

solve(
    ['10 10 10',
        '10 10 10',
        '10 10 10',
        '0,0']);