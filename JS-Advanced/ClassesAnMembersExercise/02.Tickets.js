/**
 * Created by nkondova on 11.7.2017 г..
 */
function sortTickets(ticketData, sortBy) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for (let ticketArgs of ticketData) {
        let [destination, price, status] = ticketArgs.split('|');
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    return tickets.sort((a,b) => a[sortBy] > b[sortBy]);

}


// vdonchev solution
/*
function sortTickets(ticketsData, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(tickets, criteria) {
            switch (criteria) {
                case 'destination':
                    return tickets.sort((t1, t2) => t1.destination.localeCompare(t2.destination));
                case 'price':
                    return tickets.sort((t1, t2) => t1.price - t2.price);
                default:
                    return tickets.sort((t1, t2) => t1.status.localeCompare(t2.status));
            }
        }
    }

    return Ticket.sort(
        ticketsData
            .map(ticketData => {
                ticketData = ticketData.split(/\|/);
                return new Ticket(ticketData[0], Number(ticketData[1]), ticketData[2]);
            }),
        sortCriteria
    );
}
*/

