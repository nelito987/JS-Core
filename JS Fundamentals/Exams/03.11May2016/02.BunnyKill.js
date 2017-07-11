/**
<<<<<<< HEAD
 * Created by nkondova on 9.6.2017 г..
=======
 * Created by Neli on 13.6.2017 г..
>>>>>>> 7663f9758d13ef9948df9b2bb2bbf78714265eec
 */
function solve(input) {
    let bombs = input.pop().split(/[\s,]+/g).map(Number);
    let matrix = input.map(l => l.split(' ').map(Number));
    let bombDamage = 0;
    let totalDamage = 0;
<<<<<<< HEAD

    for(let b = 0; b < bombs.length; b+=2){
        let x = bombs[b];
        let y = bombs[b+1];
=======
    let counter = 0;

    for(let b = 0; b < bombs.length; b+=2){
        let x = Number(bombs[b]);
        let y = Number(bombs[b+1]);
>>>>>>> 7663f9758d13ef9948df9b2bb2bbf78714265eec
        if(matrix[x][y] > 0){
            bombDamage = matrix[x][y];
        }

<<<<<<< HEAD
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
=======
        if(x>0 && y > 0){
            matrix[x-1][y-1] -=bombDamage;
        }
        if(x>0){
            matrix[x-1][y] -=bombDamage;
        }
        if(x>0 && y < matrix[x].length){
            matrix[x-1][y+1] -=bombDamage;
        }
        if(y>0){
            matrix[x][y-1] -=bombDamage;
        }
        if(y<matrix[x].length){
            matrix[x][y+1] -=bombDamage;
        }
        if(x<matrix.length && y >0){
            matrix[x+1][y-1] -=bombDamage;
        }
        if(x<matrix.length){
            matrix[x+1][y] -=bombDamage;
        }
        if(x<matrix.length && y < matrix[x].length){
            matrix[x+1][y+1] -=bombDamage;
        }

        /* let upperX = Math.max(0, x-1);
         let downX = Math.min(matrix.length-1, x+1);
         let leftY = Math.max(0, y-1);
         let rightY = Math.min(matrix[0].length-1, y+1);

         matrix[upperX,leftY] -= bombDamage;
         matrix[upperX,y] -= bombDamage;
         matrix[upperX,rightY] -= bombDamage;
         matrix[x,leftY] -= bombDamage;
         matrix[x,rightY] -= bombDamage;
         matrix[downX,leftY] -= bombDamage;
         matrix[downX,y] -= bombDamage;
         matrix[downX,rightY] -= bombDamage;*/


        /*if(x>0 && y >=0 && y < matrix.length){
         matrix[x-1][y] -= bombDamage;

         }else if(x>0 && y>0){
         matrix[x-1][y-1] -= bombDamage;
         }else if(x>0 && y < matrix.length){
         matrix[x-1][y+1] -= bombDamage;
         }else if(y > 0){
         matrix[x][y-1] -= bombDamage;
         }else if(y < matrix.length){

         }*/
    }

    for (var r = 0; r < matrix.length; r++) {
        for (var c = 0; c < matrix.length; c++) {
            if(matrix[r][c] > 0){
                totalDamage += matrix[r][c];
                counter++;
            }
        }
    }

    console.log(totalDamage);
    console.log(counter);
    /*console.log(matrix.join('\n'));*/
}

solve(["5 10 15 20",
    "10 10 10 10",
    "10 15 10 10",
    "10 10 10 10",
    "2,2 0,1"]);

solve(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);
>>>>>>> 7663f9758d13ef9948df9b2bb2bbf78714265eec
