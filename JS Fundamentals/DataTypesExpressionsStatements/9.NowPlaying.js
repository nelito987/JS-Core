/**
 * Created by neli on 26.5.2017 г..
 */
function solve([track, artist, duration]) {
    return `Now Playing: ${artist} - ${track} [${duration}]`;
}

console.log(solve(['Number One', 'Nelly', '4:09']));