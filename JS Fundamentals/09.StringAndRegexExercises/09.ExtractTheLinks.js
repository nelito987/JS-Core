/**
 * Created by nkondova on 7.6.2017 г..
 */
function solve(arr) {
    let regex = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g;
    let result = [];
    let match;
    for (let sentence of arr) {
        while(match = regex.exec(sentence)){
            result.push(match[0]);
        }
    }

    return result.join('\n');
}