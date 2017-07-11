/**
 * Created by Neli on 7.6.2017 г..
 */
function solve(input) {
    let days = 0;
    let extracted = 0;
    let yeld = input;

    while(yeld >= 100){
        extracted = extracted + yeld - 26;
        yeld-=10;
        days++;
    }

    if(extracted >= 26){
        extracted -= 26
    }else{
        extracted = 0;
    }
    console.log(days);
    console.log(extracted);
}

solve(450);