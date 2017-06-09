/**
 * Created by nkondova on 7.6.2017 г..
 */
function solve(input) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let match;
    let result = [];
    while(match= regex.exec(input)){
        result.push(match[1]);
    }
    return result.join(',');
}

console.log(solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));