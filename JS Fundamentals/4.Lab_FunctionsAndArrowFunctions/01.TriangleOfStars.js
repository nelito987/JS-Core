/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(n) {
    let result ='';

        for(let j=0; j<n; j++){
            result += '*'.repeat(j+1) + '\n';
        }

        for(let j=n-1; j>0; j--){
            result += '*'.repeat(j)+ '\n';
        }

    return result;
}

console.log(solve(2));