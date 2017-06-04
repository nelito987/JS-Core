/**
 * Created by Neli on 4.6.2017 г..
 */
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return regex.test(email) ? 'Valid' : 'Invalid';
}