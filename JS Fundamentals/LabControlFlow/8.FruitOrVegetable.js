/**
 * Created by neli on 26.5.2017 г..
 */
function solve(word) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let veggies = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    if (fruits.indexOf(word) >= 0) {
        console.log("fruit")
    }
    else if (veggies.indexOf(word) >= 0) {
        console.log("vegetable");
    }
    else {
        console.log("unknown");
    }
}
