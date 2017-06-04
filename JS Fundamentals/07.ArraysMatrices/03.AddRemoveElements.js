/**
 * Created by Neli on 3.6.2017 г..
 */
function solve(input) {
    let result = [];
    let number = 0;
    for(let command of input){
        number++;
        if(command == 'add'){
            result.push(number);
        }else{
            result.pop();
        }

    }

    if(result.length > 0){
        return result.join('\n');
    }else{
        return 'Empty';
    }
}

solve();