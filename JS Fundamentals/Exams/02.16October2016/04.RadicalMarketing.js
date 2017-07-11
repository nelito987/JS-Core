/**
 * Created by Neli on 17.6.2017 г..
 */
function solve(input) {
    let people = new Map();
    let subscribers = new Map();

    for (let line of input) {
        let commands = line.split('-');

        if(commands.length == 1){
            let name = line;
            if(!people.has(name)){
                people.set(name, []);
                subscribers.set(name, 0);
            }
        }else{
            let personA = commands[0];
            let personB = commands[1];

            if(people.has(personA) &&
                people.has(personB) &&
                personA != personB &&
                !arrayHas(people.get(personB), personA)){

                people.get(personB).push(personA);
                subscribers.set(personA, subscribers.get(personA)+1);
            }
        }
    }

    let sorted = [...people.keys()].sort(function (a,b) {
        if(people.get(a).length == people.get(b).length){
         return subscribers.get(b) - subscribers.get(a);
        }

        return people.get(b).length - people.get(a).length;
    });

    let mostImportant = sorted[0];
    console.log(mostImportant);
    if (people.get(mostImportant).length > 0) {
        for (let i = 0; i < people.get(mostImportant).length; i++) {
            console.log(`${i + 1}. ${people.get(mostImportant)[i]}`);
        }
    }


    function arrayHas(array, element) {
        for (let el of array) {
            if (el == element) {
                return true;
            }
        }

        return false;
    }
}

solve(["J", "G", "P", "R", "C", "J-G", "G-J", "P-R", "R-P", "C-J"]);