/**
 * Created by neli on 26.5.2017 г..
 */
function solve([firstProp, firstValue, secondProp, secondValue, thirdProp, thirdValue]) {
    let obj = {};
    obj[firstProp] = firstValue;
    obj[secondProp] = secondValue;
    obj[thirdProp] = thirdValue;
    return obj;
}

console.log(solve(['name', 'Pesho', 'age', '23', 'gender', 'male']));