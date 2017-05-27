/**
 * Created by Neli on 27.5.2017 г..
 */
function solve([mName, day]) {
    let firstMovie = {
        'name': 'the godfather',
        'monday': 12,
        'tuesday':10,
        'wednesday': 15,
        'thursday': 12.5,
        'friday': 15,
        'saturday': 25,
        'sunday': 30
    };
    let secondMovie = {
        'name': 'Schindler\'s List',
        'monday': '8.50',
        'tuesday': '8.50',
        'wednesday': '8.50',
        'thursday': '8.50',
        'friday': '8.50',
        'saturday': 15,
        'sunday': 15
    };

    let thirdMovie = {
        'name': 'The Wizard of Oz',
        'monday': 10,
        'tuesday': 10,
        'wednesday': 10,
        'thursday': 10,
        'friday': 10,
        'saturday': 15,
        'sunday': 15
    };
    let forthMovie = {
        'name': 'Casablanca',
        'monday': 8,
        'tuesday': 8,
        'wednesday': 8,
        'thursday': 8,
        'friday': 8,
        'saturday': 10,
        'sunday': 10
    };
    let movies = [];
    let movieName = mName.toLowerCase();
    let dayPrice = day.toLowerCase();
    movies.push(firstMovie);
    movies.push(secondMovie);
    movies.push(thirdMovie);
    movies.push(forthMovie);

    let movie = movies.find(m => m.name.toLowerCase() == movieName);

    if (movie && movie[dayPrice]) {
        console.log(movie[dayPrice])
    } else {
        console.log('error')
    }
}

solve(['The Godfather', 'Friday']);