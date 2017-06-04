/**
 * Created by Neli on 3.6.2017 г..
 */
let solve = input => input.filter((num, i)=> i%2 != 0)
        .map(num => num*2)
        .reverse();

console.log(solve([10, 15, 20, 25]));