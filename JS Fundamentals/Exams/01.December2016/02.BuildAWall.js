/**
 * Created by Neli on 7.6.2017 г..
 */
function solve(input) {
    let concrete = [];
    let working = true;
    let wall = input.map(Number);


    while(working){
       let concretePerDay = 0;
       working = false;
        for (var i = 0; i < wall.length; i++) {
            if(wall[i] < 30){
                wall[i]++;
                concretePerDay +=195;
                working = true;
            }
        }
        if(working){
            concrete.push(concretePerDay);
        }
    }
    console.log(concrete.join(', '));
    console.log(concrete.reduce((a,b) => a+b) * 1900 + ' pesos');
}

solve([21, 25, 28] );