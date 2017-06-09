/**
 * Created by nkondova on 7.6.2017 г..
 */
function solve(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let result = sentence.match(regex) || [];
    return result.length;
}
console.log(solve('The waterfall was so high, that the child couldn’t see its peak.','the'));