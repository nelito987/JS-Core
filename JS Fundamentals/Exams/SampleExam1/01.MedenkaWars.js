/**
 * Created by Neli on 16.6.2017 г..
 */
function solve(input) {
    let whiteAttaks = [];
    let darkAttaks = [];

    for (let line of input) {
        let args = line.split(/\s+/);
        let damage = Number(args[0]);
        let attack = args[1];

        if(attack == 'white'){
            whiteAttaks.push(damage);
        }
        if(attack == 'dark'){
            darkAttaks.push(damage);
        }
    }
    let naskorDamage = 0;
    let viktorDamage = 0;
    let counter = 1;

    for (var i = 0; i < darkAttaks.length; i++) {
        if(darkAttaks[i] == darkAttaks[i-1] && counter ==2){
            naskorDamage += darkAttaks[i]*60*2.75;
            counter = 1;
        }else if(darkAttaks[i] == darkAttaks[i-1] && counter !=2){
            naskorDamage += darkAttaks[i]*60;
            counter++;
        }else{
            naskorDamage += darkAttaks[i]*60;
        }
    }

    for (var i = 0; i < whiteAttaks.length; i++) {
        if(i>4 && whiteAttaks[i] == whiteAttaks[i-1] &&
            whiteAttaks[i] == whiteAttaks[i-2] &&
            whiteAttaks[i] == whiteAttaks[i-3] &&
            whiteAttaks[i] == whiteAttaks[i-4]){
            viktorDamage += whiteAttaks[i]*60*4.5;
        }else{
            viktorDamage += whiteAttaks[i]*60;
        }
    }

    if (viktorDamage > naskorDamage) {
        console.log('Winner - Vitkor');
    } else {
        console.log('Winner - Naskor')
    }

    console.log(`Damage - ${Math.max(viktorDamage, naskorDamage)}`);
}

solve(['5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);