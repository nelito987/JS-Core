/**
 * Created by neli on 26.5.2017 г..
 */
function solve([day, month, year]) {
    let date = new Date(year, month-1, 0);
    return date.getDate();
}

console.log(solve([17,3,2002]));