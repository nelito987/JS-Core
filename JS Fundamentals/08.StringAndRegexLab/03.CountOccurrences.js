/**
 * Created by Neli on 4.6.2017 г..
 */
function solve(str, text) {

    //var search = input[0];
   /* var regExp = new RegExp(str, "g");
    var count = (text.match(str) || []).length;
    console.log(count);*/
    var regExp = new RegExp(str, "g");
    var count = (text.match(str) || []).length;
    console.log(count);
}

solve('ma','Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');
solve('the', 'thebfbfbfbthesmsdmsmthe');