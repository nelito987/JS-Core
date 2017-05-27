/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(a, b, c){
    let discriminant = Math.pow(b,2) - 4*a*c;
    let d = Math.sqrt(discriminant);
    if(discriminant>0){
        let x1 = (-b +d)/(2*a);
        let x2 = (-b -d)/(2*a);
        let smaller = x1<x2 ? x1:x2;
        let greater = x1>x2 ? x1:x2;
        console.log( smaller + '\n' + greater );
    }else if(discriminant == 0){
        let x = (-b)/(2*a);
        console.log(x);
    }else{
        console.log('No');
    }
}

solve(6, 11, -35);
