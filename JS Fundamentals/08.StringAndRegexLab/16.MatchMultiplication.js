/**
 * Created by Neli on 4.6.2017 г..
 */
function multiplicationMatch(input) {
    let regex = /(\-*\d+)\s*\*\s*(\-*\d+\.*\d*)/g;
    input = input.replace(regex, (match, num1, num2) => Number(num1)*Number(num2));
    console.log(input);
}