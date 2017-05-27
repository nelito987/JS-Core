/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(numbers) {
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for(let i=0;i< numbers.length; i++){
        sum += Number(numbers[i]);
        inverseSum += 1/numbers[i];
        concat += numbers[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

solve([1,2,3]);