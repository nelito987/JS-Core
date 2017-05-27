/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(input) {
    let words = input
        .toUpperCase()
        .split(/[\W]+/)
        .filter(w => w)
        .join(', ');

    return words;
}

console.log(solve('das dfadf fff dd, ddd?'))