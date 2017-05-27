/**
 * Created by neli on 26.5.2017 г..
 */
function solve([a,b]) {
    let precision = Math.min(b, 15);
     return Number(a.toFixed(precision));
}

console.log(solve([10.5, 3]));