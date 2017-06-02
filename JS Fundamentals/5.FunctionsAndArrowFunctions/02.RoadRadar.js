/**
 * Created by nkondova on 2.6.2017 г..
 */
function solve(input) {
    let curSpeed = input[0];
    let area = input[1];
    let speedLimit = 0;

    switch (area){
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
        default: speedLimit = 0; break;
    }

    console.log(isInLimit(curSpeed, speedLimit));

    function isInLimit(speed, speedLimit) {
        let difference = speed - speedLimit;
        switch (true){
            case (difference > 0 && difference <= 20): return 'speeding';
            case difference > 20 && difference <= 40: return 'excessive speeding';
            case difference > 40: return 'reckless driving';
            default: return "";
        }
    }
}


solve([120, 'interstate']);