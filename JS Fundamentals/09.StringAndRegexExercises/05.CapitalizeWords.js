/**
 * Created by nkondova on 7.6.2017 г..
 */
function solve(string) {
    let result = [];
    for(let word of string.split(' ')){
        let newWord = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
        result.push(newWord);
    }

    return result.join(' ');
}