/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(n) {
    let rows = n%2==0 ? n-1 : n;
    let cols = 2*n-1;
    let result = '';

    for(let r=1; r<=rows; r++){
        if(r==1 || r==rows || r==((rows+1)/2)){
            for(let c = 1; c<=cols; c++){
                if(c==1 || c==cols || c==n){
                    result += '+';
                }else{
                    result += '-';
                }
            }
        }else{
            for(let c = 1; c<=cols; c++){
                if(c==1 || c==cols || c==n){
                    result += '|';
                }else{
                    result += ' ';
                }
            }
        }
        result += '\n';
    }

    return result;
}

console.log(solve(7));
