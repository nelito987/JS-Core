/**
 * Created by neli on 26.5.2017 г..
 */
function solve(num) {
    let isPrime = true;
    if (num < 0 || num === 0 || num === 1) {
        return false;
    }
    for (var n = 2; n < Math.sqrt(num); n++) {
        if (num % n == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}

solve(12);