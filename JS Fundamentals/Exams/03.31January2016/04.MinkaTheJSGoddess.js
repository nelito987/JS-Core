/**
 * Created by Neli on 16.6.2017 г..
 */
function solve(input) {
    //let lines = input.split('\n');
    let taskNumbers = {};

    for (let line of input) {
        let tokens = line.split(/\s*&\s*/g);
        let taskName = tokens[0].trim();
        let type = tokens[1];
        let taskNumber = 'Task ' + tokens[2];
        let taskScore = Number(tokens[3]);
        let linesOfCode = Number(tokens[4]);

        if(!taskNumbers[taskNumber]){
            taskNumbers[taskNumber] =
                {
                    tasks: [],
                    score: 0,
                    average: 0,
                    lines: 0
                };
        }

        let currentTask = {
            name: taskName,
            type: type
        };
        taskNumbers[taskNumber].tasks.push(currentTask);
        taskNumbers[taskNumber].score += taskScore;
        taskNumbers[taskNumber].lines += linesOfCode;
        let avrg = Math.round((taskNumbers[taskNumber].score/taskNumbers[taskNumber].tasks.length)*100)/100;
        taskNumbers[taskNumber].average = avrg;
    }
    Object.keys(taskNumbers).forEach(function (key) {
        delete taskNumbers[key].score;
        taskNumbers[key].tasks.sort(function (a,b) {
            return a.name.localeCompare(b.name);
        });
    });

    let sortedTasks = Object.keys(taskNumbers).sort(function (a,b) {
        if(taskNumbers[a].average == taskNumbers[b].average){
            return taskNumbers[a].lines - taskNumbers[b].lines;
        }
        return taskNumbers[b].average - taskNumbers[a].average;
    });

    let sortedResult = {};
    sortedTasks.forEach(function (el) {
        sortedResult[el] = taskNumbers[el];
    });

    console.log(JSON.stringify(sortedResult));
}

solve(["Array Matcher & strings & 4 & 100 & 38", "Magic Wand & draw & 3 & 100 & 15", "Dream Item & loops & 2 & 88 & 80", "Knight Path & bits & 5 & 100 & 65", "Basket Battle & conditionals & 2 & 100 & 120", "Torrent Pirate & calculations & 1 & 100 & 20", "Encrypted Matrix & nested loops & 4 & 90 & 52", "Game of bits & bits & 5 &  100 & 18", "Fit box in box & conditionals & 1 & 100 & 95", "Disk & draw & 3 & 90 & 15", "Poker Straight & nested loops & 4 & 40 & 57", "Friend Bits & bits & 5 & 100 & 81"]);