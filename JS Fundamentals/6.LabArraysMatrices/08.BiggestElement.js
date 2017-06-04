/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    let max = input[0][0];

    for(let arr of input){
        for(let num of arr){
            if(num >= max){
                max = num;
            }
        }
    }

    return max;
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));