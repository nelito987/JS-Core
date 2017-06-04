/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    let result = [input[0]];
    let max = input[0];

    for(let i=1; i< input.length;i++){
        if(input[i] >= max){
            max = input[i];
            result.push(input[i]);
        }
    }
    return result.join('\n');
}

console.log(solve([1,3,8,4,10,12,3,2,24]));