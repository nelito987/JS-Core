/**
 * Created by Neli on 15.7.2017 г..
 */
function cardDeckBuilder(selector) {
    function addCard(face, suit){
        const SUITS = {
            C: '\u2663',
            D: '\u2666',
            H: '\u2665',
            S: '\u2660'
        };
        suit = SUITS[suit];
        let card = $('<div>')
            .addClass('card')
            .html(`${face} ${suit}`)
            .on('click', reverseCards);
        
        $(selector).append(card);
    }
    
    function reverseCards() {
        let cards = $(selector + ' .card').toArray();
        cards.reverse();
        $(selector).append(cards);
    }

    return{
        addCard
    }
}
