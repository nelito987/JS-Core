/**
 * Created by Neli on 25.5.2017 г..
 */
function hi(word, letter) {

    let count = 0;
    for(let i=0; i<word.length; i++){
        if(word[i] == letter){
            count++;
        }
    }

    console.log(count);
}

hi('hello', 'l');