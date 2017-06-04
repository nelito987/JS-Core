/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    let rotations = Number(input.pop() % input.length);
    let counter = 0;
    while (counter < rotations){
        let last = input.pop();
        input.unshift(last);
        counter ++;
    }
    return input.join(' ');
}

console.log(solve(['b', 'o', 'c', 'A', 15]));
console.log(solve([1,2,3,4,2]));