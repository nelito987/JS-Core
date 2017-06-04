/**
 * Created by Neli on 4.6.2017 г..
 */
function aggregateTable(input) {
    let sum = 0;
    let list = [];
    for(let line of input){
        let data = line.split('|');
        let town = data[1].trim();
        let income = Number(data[2].trim());
        list.push(town);
        sum+=income;
    }
    console.log(list.join(', ')+'\n'+sum);
}