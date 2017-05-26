/**
 * Created by neli on 26.5.2017 г..
 */
function solve(n) {
    console.log('<div class="chessboard">');
    let isBlack;
    for(let i = 1; i <= n; i++){
        if(i%2==1){
            isBlack = true;
        }else{
            isBlack = false;
        }
        console.log('<div>');
        for(let j = 1; j <=n; j++){
            if(isBlack){
                console.log('   <span class="black"></span>');
                isBlack = false;

            }else {
                console.log('   <span class="white"></span>');
                isBlack = true;
            }
        }
        console.log('</div>');
    }
    console.log('</div>');
}

solve(4);