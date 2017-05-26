/**
 * Created by neli on 26.5.2017 г..
 */
function solve([P, interest, period, t]) {
    let i = interest/100;
    let n = 12/period;
    let a = n*t;
    let b = 1+i/n;
    let result = P*Math.pow(b,a);
    return result;
}

console.log(solve([1500, 4.3, 3, 6]));