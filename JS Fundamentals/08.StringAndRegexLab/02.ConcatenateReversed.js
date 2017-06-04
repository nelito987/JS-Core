/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    let result = [];
    for(let word of input){
        word = word.split('').reverse().join('');
        result.push(word);
    }
    return result.reverse().join('');
}

console.log(solve(['Ihh', 'am', 'student']));