/**
 * Created by neli on 26.5.2017 г..
 */
function solve(r, h) {
    let volume = (Math.PI * r * r * h) / 3;
    let area = Math.PI * r * (r + Math.sqrt(r * r + h * h));

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}

solve(3.3, 7.8);