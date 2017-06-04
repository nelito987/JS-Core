/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    let n = input[0];
    let k = input[1];
    let result = [];
    result.push(1);

    while(result.length < n){
        let index = Math.max(result.length - k, 0);
        let newArr = result.slice(index);
        let newNum = 0;
        for(let num of newArr){
            newNum += num;
        }
        result.push(newNum);
    }
    return result;
}

console.log(solve([9,5]));


/*
function solve(n,k) {
    let resArr = [1];

    function getSum(arr) {
        let sum = 0;
        for (let el of arr) {
            sum+=el;
        }
        return sum;
    }

    for (let i = 0; i < n-1; i++) {
        let sumArr =0;
        let seq = resArr.slice(-k);
        sumArr = getSum(seq);
        resArr.push(sumArr);
    }
    console.log(resArr);
}*/
