/**
 * Created by nkondova on 7.6.2017 г..
 */
function solve(arr) {
    let result = [];
    for (let line of arr) {
        let match = line.match(/[0-9]+/gi);
        if(match){
            match.forEach(function (current) {
                result.push(current)
            });
        }
    }
    return result.join(' ');
}

console.log(solve(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45'
]));