/**
 * Created by neli on 25.5.2017 г..
 */
function solve(n){
    let num = Number(n);
    let result = '1';
    for(let i = 2; i<= num; i++){
        result += i;
    }
    console.log(result);
}

solve(11);