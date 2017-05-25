/**
 * Created by neli on 25.5.2017 г..
 */
function solve(a,b,c) {
    let p = (a+b+c)/2;
    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(area);
}

solve(2,3.5,4);