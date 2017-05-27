/**
 * Created by neli on 26.5.2017 г..
 */


function solve([ax, ay, az, bx, by, bz]) {
    let result = Math.sqrt(Math.pow((ax-bx),2)+ Math.pow((ay-by),2)+Math.pow((az-bz),2));
    console.log(result);
}

solve([3.5, 0, 1, 0, 2, -1]);