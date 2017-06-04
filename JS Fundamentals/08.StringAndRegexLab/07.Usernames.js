/**
 * Created by Neli on 4.6.2017 г..
 */
function usernames(input) {
    let usernames = [];
    for(let email of input){
        let emailData = email.split('@');
        let name = emailData[0] + '.';
        let domainTokens = emailData[1].split('.').map(d => d[0]).join('');
        let username = name + domainTokens;
        usernames.push(username);
    }

    return usernames.join(', ');
}