/**
 * Created by Neli on 9.6.2017 г..
 */
function solve(input) {
    let key = input[0];
    let pattern = new RegExp(`( |^)(${key})(\\s+[!#$%A-Z]{8,})( |\\.|,|$)`, 'ig');
    //let pattern = new RegExp(`( |^)(${key})(\\s+[!#$%A-Z]{8,})([ \\.,$])`, 'ig');
    //let pattern = new RegExp(`( |^)(${key})(\\s+[A-Z!%$#]{8,})( |\\.|,|$)`, 'ig');


    for (let i = 1; i < input.length; i++) {
        let result = input[i].replace(pattern, function (match, g1,g2,g3,g4) {
            let res = g3;
            if (res.match(/\s+[A-Z!%$#]{8,}/)){
                res = res
                    .replace(/!/g,'1')
                    .replace(/%/g, '2')
                    .replace(/\#/g,'3')
                    .replace(/\$/g,'4')
                    .replace(/[A-Z]/g, x=>x.toLowerCase());;
            }

            return g1+g2+res+g4;
        });
        if (result) {
            console.log(result);
        } else {
            console.log(input[i]);
        }
    }
}
//solve(["enCode","Some messages are just not encoded what can you do?","RE - ENCODE THEMNOW! - he said.","Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."]);
solve(['secret',
    `Random text with secrets EVERYWHERE
secret HEREHERE and one secret OVERTHEREANDEVERYWHERE
secret SECRETTIME, and secret KINDATHERE.
    secret ONELINER
and maybe secret FALSESE or secret TRUESECRET or secret ENDONCOMA,
    here are three secrets one secret OVERHERE, one secret OVERTHERE and one secret DISSAPPOINT`]);