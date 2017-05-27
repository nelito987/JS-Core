/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(a, b, operator) {
    let functions = {
        '+': (a,b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => a/b
    };

    return functions[operator](a, b);
}
