/**
 * Created by neli on 26.5.2017 г..
 */
function solve([v1, v2, seconds]) {
    let distance1 = (v1*1000)*(seconds/3600);
    let distance2 = (v2*1000)*(seconds/3600);
    let result = Math.abs(distance2-distance1);
    console.log(result);
}

solve([5,-5,40]);