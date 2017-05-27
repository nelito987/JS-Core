/**
 * Created by Neli on 24.5.2017 г..
 */
function hi(a) {

    let sum;
    let vat;
    let total;

    for (let i; i < a.length; i++) {
        sum += a[i];
    }
    vat = sum * 0.2;
    total = vat + sum;
    console.log('sum = ' + sum);
    console.log('vat =' + vat);
    console.log('total =' + total);
}

hi([10]);