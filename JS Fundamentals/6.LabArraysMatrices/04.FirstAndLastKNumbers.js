/**
 * Created by nkondova on 2.6.2017 г..
 */
function solve(arr) {
    //input = input.map(Number);
    let num = arr[0];
    arr.shift();

    console.log(arr.slice(0, num));
    console.log(arr.slice(arr.length-num));
}

solve([2,7,8,9]);