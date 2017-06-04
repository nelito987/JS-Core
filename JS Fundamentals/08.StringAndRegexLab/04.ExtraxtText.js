/**
 * Created by Neli on 4.6.2017 г..
 */
function solve(input) {
    let regex = /\(([.]*?)\)/g;
    let result = [];
    while(match = regex.exec(input)){
        result.push(match[1]);
    }

    return result.join(', ');
}

