/**
 * Created by Neli on 9.6.2017 г..
 */
function solve(input) {
    let biggest = -Infinity;

    for (var i = 0; i < input.length; i++) {
        if(input[i] >= 0 && input[i]<10){
            let count = Number(input[i]);
            let currentM = 1;
            for (var j = i+1; j <= i+count; j++) {
                  currentM *= Number(input[j]);
            }
            biggest = currentM > biggest ? currentM : biggest;
        }
    }
    console.log(biggest);
}

solve([10,20,2,30,44,3,56,20,24]);