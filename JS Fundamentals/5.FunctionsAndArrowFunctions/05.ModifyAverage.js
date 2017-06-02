/**
 * Created by nkondova on 2.6.2017 г..
 */
function solve(num) {
    let number = num;

    while(calcAverage(number) <= 5){
        number = number + '9';
    }

    console.log(number);

    function calcAverage(arr){
        let sum = 0;
        let numberSigns = arr.toString().length;
        let numberString = arr.toString();

        for(i=0; i<numberSigns; i++){
            sum += Number(numberString[i]);
        }
        let average = sum/numberSigns;

        return average;
    }
}

solve(101);