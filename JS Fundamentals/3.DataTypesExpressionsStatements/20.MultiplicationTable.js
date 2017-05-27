/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(n) {
    let result = '<table border="1">' + '\n';

    for(let i=0; i<= n; i++){
        result += '<tr>';
        for(let j=0; j<=n; j++){
            let symbol;
            if(i ==0 && j == 0){
                result += `<th>x</th>`;
            }else if(i == 0){
                result += `<th>${j}</th>`;
            }else if(j == 0){
                result += `<th>${i}</th>`;
            }else{
                result += `<td>${i*j}</td>`;
            }
        }
        result +='</tr>' + '\n';
    }
    result += '</table>';
    return result;
}

console.log(solve(5));