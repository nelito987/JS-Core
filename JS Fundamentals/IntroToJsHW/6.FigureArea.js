/**
 * Created by neli on 25.5.2017 г..
 */
/**
 * Created by neli on 25.5.2017 г..
 */
function solve(w, h, W, H){
    let area1;
    let area2;
    area1 = W*H;
    area2 = w*h;
    let duplicatedArea = Math.min(w, W) * Math.min(h, H);
    let resultArea = area1 + area2 - duplicatedArea;

    console.log(resultArea);
}

solve(13,2,5,8);