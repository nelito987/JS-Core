/**
 * Created by Neli on 4.6.2017 г..
 */
function findWords(input) {
    let regex = /[\w]+/g;
    return input.match(regex).join('|');
}