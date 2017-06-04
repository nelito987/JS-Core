/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    let step = input.pop();
    //return input.filter((num,i)=> i==0 || (i+step)%step==0).join('\n');
    return input.filter((num,i)=> i%step==0).join('\n');
}

console.log(solve([5,20,11111,31,4,20,2]));