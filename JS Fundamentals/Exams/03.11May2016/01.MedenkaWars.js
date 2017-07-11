/**
 * Created by nkondova on 9.6.2017 г..
 */
function solve(input) {
    let naskor = [];
    let viktor = [];
    let naskorDamage = 0;
    let viktorDamage = 0;

    for (let line of input) {
        line = line.split(' ');
        if(line[1] == 'white'){
            viktor.push(Number(line[0]));
        }else if(line[1] == 'dark'){
            naskor.push(Number(line[0]));
        }
    }

    for (var i = 0; i < naskor.length; i++) {
        let first = Number(naskor[i]) == Number(naskor[i-1]);
        let second = Number(naskor[i-2]) == Number(naskor[i-3]);
        let third = naskor[i-3] == naskor[i-4];
        let forth = Number(naskor[i]) == Number(naskor[i-4]);

        if(first && second && third && forth){
            naskorDamage += naskor[i]*60*4.5;
        }else{
            naskorDamage += naskor[i]*60;
        }
    }

    for (var i = 0; i < viktor.length; i++) {
        if(viktor[i] == viktor [i+1]){
            viktorDamage = viktor[i]*60 + viktor[i]*60*2.75;
            i=i+2;
        }else{
            viktorDamage += viktor[i]*60;
        }
    }

    if (viktorDamage > naskorDamage) {
        console.log('Winner - Vitkor');
        console.log(`Damage - ${viktorDamage}`);
    } else {
        console.log('Winner - Naskor');
        console.log(`Damage - ${naskorDamage}`);
    }
}

solve(['2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas']);