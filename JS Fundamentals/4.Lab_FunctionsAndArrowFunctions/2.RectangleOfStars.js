/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(n) {
    let result ='';

    for(let j=0; j<n; j++){
        result += '*' + ' *'.repeat(n-1) + '\n';
    }

    return result;
}

console.log(solve(5));