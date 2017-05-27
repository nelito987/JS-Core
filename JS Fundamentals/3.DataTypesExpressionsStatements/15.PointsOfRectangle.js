/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(input){
    let  x = input[0];
    let y = input[1];
    let xMin = input[2];
    let xMax = input[3];
    let yMin = input[4];
    let yMax = input[5];

    let isXInside = (x >= xMin && x <= xMax);
    let isYInside = (y >= yMin && y <= yMax);

    if(isXInside && isYInside){
        return 'inside';
    }else{
        return 'outside';
    }

}

console.log(solve([150, -30, 2, 12, -3, 3]));
console.log(solve([12.5, -1, 2, 12, -3, 3]));