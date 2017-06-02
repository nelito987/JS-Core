/**
 * Created by nkondova on 2.6.2017 г..
 */
function solve(input) {
    let number = input[0];

    for(let i =1; i<input.length; i++){
        number = cookByWord(number, input[i]);
        console.log(number);
    }



    function cookByWord(number, word) {
        switch(word){
            case 'chop': number /=2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number++; break;
            case 'bake': number *=3; break;
            default: number*=0.8;break;
        }

        return number;
    }
}

solve([32, 'chop','chop','chop','chop','chop']);