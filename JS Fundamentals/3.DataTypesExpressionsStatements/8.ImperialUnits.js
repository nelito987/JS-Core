/**
 * Created by neli on 26.5.2017 г..
 */
function solve(n) {
    let foot = Math.floor(Number(n/12));
    let inches = n % 12;
    return `${foot}'-${inches}"`;
}

console.log(solve(55));