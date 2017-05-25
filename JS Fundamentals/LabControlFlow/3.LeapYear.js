/**
 * Created by neli on 25.5.2017 г..
 */
function solve(year) {
    if((year%4 == 0 && year%100 !== 0) || year%400 == 0 ){
        console.log('yes');
    }else{
        console.log('no');
    }
}

solve(2016)