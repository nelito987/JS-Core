/**
 * Created by Neli on 4.6.2017 г..
 */
function censor(text, words) {
    for(let word of words){
        let replaced = '-'.repeat(word.length);
        while(text.indexOf(word) >-1){
            text = text.replace(word, replaced);
        }
    }
    return text;
}