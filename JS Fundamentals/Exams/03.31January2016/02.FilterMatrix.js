/**
 * Created by Neli on 13.6.2017 г..
 */
function solve(input) {
    let number = input.pop().trim();
    let allNumsArr = input.join(' ').split(' ');
    input = input.map(l => l.split(' '));

    let counter = 1;
    let result = [];

    for (var i = 0; i < allNumsArr.length; i++) {
        if(allNumsArr[i] == allNumsArr[i+1]){
            counter++;
        }else{
            counter = 1;
        }

        if(counter == number){
            let end = i+1;
            let start = end - number +1;
            for(let j = start; j <= end; j++){
                allNumsArr[j] = '*';
            }
        }

    }

    let index = 0;
    for(let row = 0; row < input.length; row++){
        result.push([]);
        let c = input[row].length;
        for(let col = 0; col < c; col++){
            let test = allNumsArr[index];
            if(test != '*'){
                result[row].push(allNumsArr[index]);
            }
            index++;
        }

    }

    for (let i = 0; i < result.length; i++) {
        if (result[i].length == 0)
            console.log('(empty)');
        else
            console.log(result[i].join(' '));
    }
}

//solve(["1 2 3 3","3 5 7 8","3 2 2 1","3"]);
//solve(["2 1 1 1","1 1 1","3 7 3 3 1","2"]);
solve(["1 2 3 4 5 5 5 5 5 5","5 5 5 5 5 5","5 5 5 5","1 1 3","5 5 5 5","a a a a","0 0 0 0","4"]);