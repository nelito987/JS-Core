/**
 * Created by neli on 26.5.2017 г..
 */
function solve(grads) {
    let gradsToDegrees = 400 / 360;

    let degrees = grads / gradsToDegrees;

    let degreesTurns = degrees % 360;

    if (degreesTurns < 0) {
        degreesTurns += 360;
    }

    return degreesTurns;
}

console.log(solve(-50));