/**
 * Created by neli on 26.5.2017 г..
 */
function solve(n) {
    console.log('<ul>');
    for(let i = 1; i<= n; i++)
    if(i % 2 == 0){
        console.log(`<li><span style=\'color:blue\'>${i}</span></li>`);
    }else if(i % 2 == 1){
        console.log(`<li><span style=\'color:green\'>${i}</span></li>`);
    }
    console.log('</ul>');
}

solve(10);