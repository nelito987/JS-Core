/**
 * Created by Neli on 4.6.2017 г..
 */
function parseEmployeeData(input) {
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9]+[0-9]*) - ([A-Za-z0-9 \-]+)$/;
    let result = [];
    for(let employee of input){
        let match = regex.exec(employee);
        if(match){
            result.push(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
        }
    }
    return result.join('\n');
}