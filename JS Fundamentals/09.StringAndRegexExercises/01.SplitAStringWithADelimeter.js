/**
 * Created by nkondova on 7.6.2017 г..
 */
function solve(string, delimeter) {
    return string.split(delimeter).join('\n');
}

console.log(solve('one-two-tree', '-'));