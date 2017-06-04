/**
 * Created by Neli on 4.6.2017 г..
 */
function exprSplit(expr) {
    return expr.split(/[\s.();,]+/).join('\n');
}