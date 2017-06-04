/**
 * Created by Neli on 3.6.2017 г..
 */

function solve(input) {
    return input.sort((a,b) => a - b).slice(0,2);
}

console.log(solve([10,3, 0, -1, 15, 20, 25]));