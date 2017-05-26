/**
 * Created by neli on 26.5.2017 г..
 */
function solve(number) {
    if(number % 2 == 0){
        console.log('even');
    }else if(number % 2 == 1 || number %2 == -1){
        console.log('odd');
    }else {
        console.log('invalid');
    }
}

/*solve(1.5);
solve(5);
solve(8);*/
solve(-3);