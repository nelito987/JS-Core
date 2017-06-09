/**
 * Created by nkondova on 7.6.2017 г..
 */
function solve(input) {
    let userName = /(\*[A-Z][a-zA-Z]*)(?=\s|$)/g;
    let phone = /(\+[0-9\-]{10})(?=\s|$)/g;
    let id = /(\![0-9a-zA-Z]+)(?=\s|$)/g;
    let baseName = /(\_[0-9a-zA-Z]+)(?=\s|$)/g;

    for (let element of input) {
        element = element.replace(userName, r => '|'.repeat(r.length));
        element = element.replace(phone, r => '|'.repeat(r.length));
        element = element.replace(id, r => '|'.repeat(r.length));
        element = element.replace(baseName, r => '|'.repeat(r.length));
        console.log(element);
    }
}