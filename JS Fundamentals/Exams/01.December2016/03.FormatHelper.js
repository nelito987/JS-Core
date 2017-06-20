/**
 * Created by Neli on 7.6.2017 г..
 */
function solve([input]) {
    console.log(input.replace(/([.,!?:;])\s*/g, (match, sign) => sign + ' ')
        .replace(/\s+([.,!?:;])/g, (match, sign) => sign)
        .replace(/\.\s*\.\s*\.\s*!/g, '...!')
        .replace(/\.\s+([0-9]+)/g, (match, g) => '.' + g)
        .replace(/"([^"]+)"/g, (match, g) => `"${g.trim()}"`));
}

solve('Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 . ');
solve('Make,sure to give:proper spacing where is needed... !');