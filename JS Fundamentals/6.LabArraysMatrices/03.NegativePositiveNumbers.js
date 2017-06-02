/**
 * Created by nkondova on 2.6.2017 г..
 */
function solve(input) {
    let newArr = [];
    for(let num of input){
        if(num >= 0){
            newArr.push(num);
        }else{
            newArr.unshift(num);
        }
    }
    return newArr.join("\n");
}