/**
 * Created by Neli on 13.6.2017 г..
 */
function solve(input) {
    let examAvg = 0;
    let counter = 0;
    let [examAvgName, results] = [input.pop().trim(), input.filter(l => l != '')];

    for (let i = 0; i < results.length; i++) {

         let args = results[i].split(/\s+/g).filter(t => t != '');
         let studentsName = args[0];
         let exam = args[1];
         let examPoints = Number(args[2]);
         let bonuses = Number(args[3]);
         let grade;

         let coursePoints = examPoints*0.2 + bonuses;

         if(examAvgName == exam){
             examAvg +=  examPoints;
             counter++;
         }

         grade = ((coursePoints/80)*4)+2;
         if(grade > 6) grade = 6;

         if(examPoints<100){
             console.log(`${studentsName} failed at "${exam}"`);
             continue;
         }else{
             console.log(`${studentsName}: Exam - "${exam}"; Points - ${Math.round(coursePoints * 100) / 100}; Grade - ${grade.toFixed(2)}`);
         }
    }


    let totalAvg = 0;
    if(examAvg > 0){
        totalAvg =  examAvg/counter;
    }
    console.log(`"${examAvgName}" average points -> ${Math.round(totalAvg * 100) / 100}`);
}

solve([
"Pesho C#-Advanced 100 3",
"Gosho Java-Basics 157 3",
"Tosho HTML&CSS 317 12",
"Minka C#-Advanced 57 15",
"Stanka C#-Advanced 157 15",
"Kircho C#-Advanced 300 0",
"Niki C#-Advanced 400 10",
"C#-Advanced"
]);