/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    input = input.sort().sort((a,b)=>a.length-b.length).join('\n');
    return input;
}

console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));