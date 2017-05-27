/**
 * Created by neli on 25.5.2017 г..
 */
/**
 * Created by neli on 25.5.2017 г..
 */
function solve(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let newDate = new Date(date.getTime() + oneDay);

    let formattedDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;

    console.log(formattedDate);
}
solve(2016,9,30);