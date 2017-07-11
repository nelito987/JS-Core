/**
 * Created by Neli on 17.6.2017 г..
 */
function solve(input) {

    //input = input.filter(e => e != '');

    let notebook = {};

    for (let line of input) {
        let args = line.split('|');
        let color = args[0];
        let type = args[1];
        let details = args[2];

        if(!notebook[color]){
            notebook[color] = {
                win: 1,
                loss: 1,
                name: undefined,
                age: undefined,
                opponents: []
            };
        }

        switch(type){
            case 'win':
                notebook[color].win++;
                notebook[color].opponents.push(details); break;
            case 'loss':
                notebook[color].loss++;
                notebook[color].opponents.push(details); break;
            case 'name': notebook[color].name = details; break;
            case 'age': notebook[color].age = details; break;
        }
    }

    let output = {};
    Object.keys(notebook).sort().forEach(function (key) {
        let current = notebook[key];
        if(current.age != undefined && current.name != undefined){
            output[key] = {
                age: current.age,
                name: current.name,
                opponents: current.opponents.sort(),
                rank: (current.win / current.loss).toFixed(2)
            }
        }
    });

    console.log(JSON.stringify(output));
}

//solve(["red|name|kiko","red|win|Vladko","blue|age|12","green|age|13","green|win|gosho","red|age|12","green|name|Pesho","green|win|ico","green|win|Gosho","green|win|qfkata","green|win|stamat","green|win|petko","green|win|mariya"]);
solve(["purple|age|99", "red|age|44", "blue|win|pesho", "blue|win|mariya", "purple|loss|Kiko", "purple|loss|Kiko", "purple|loss|Kiko", "purple|loss|Yana", "purple|loss|Yana", "purple|loss|Manov", "purple|loss|Manov", "red|name|gosho", "blue|win|Vladko", "purple|loss|Yana", "purple|name|VladoKaramfilov", "blue|age|21", "blue|loss|Pesho"]);