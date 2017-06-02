/**
 * Created by nkondova on 2.6.2017 г..
 */
function solve(arr) {
    let p =  arr.filter((num,i) => i%2 == 0)
        .join(' ');

    console.log(p);
}

solve(['20', '30', '40']);