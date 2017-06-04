/**
 * Created by Neli on 4.6.2017 г..
 */
function matchDates(input) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result = regex.exec(input);

    while (result != null){
        let [date,day,month,year] = result;
        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        result = regex.exec(input);
    }

}