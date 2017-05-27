/**
 * Created by Neli on 27.5.2017 г..
 */
function solve(word) {
    switch (word) {
        case 'Monday': return 1;
        case 'Tuesday': return 2;
        case 'Wednesday': return 3;
        case 'Thursday': return 4;
        case 'Friday': return 5;
        case 'Saturday': return 6;
        case 'Sunday': return 7;
    }
    return 'error';
}

/*
function getDayOfWeek(day) {
    let days = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ');

    let dayIndex = days.indexOf(day);
    return dayIndex !== -1 ? dayIndex + 1 : 'error';
}*/
