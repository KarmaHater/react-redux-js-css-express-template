const _shuffle = require('lodash/shuffle');
const _drop = require('lodash/drop');
const _random = require('lodash/random');

module.exports = class Train {
    constructor(name, maxPassangers) {
        this.name = name;
        this.maxPassangers = maxPassangers;
        this.passangers = [];
        this.tickets = [];
    }

    isFull() {
        return this.passangers.length >= this.maxPassangers;
    }

    offBoardPassangers(people) {
        _drop(this.passangers, _random(10));
    }

    onBoardPassangers(people) {
        people
            .splice(0, this.maxPassangers - 1)
            .map(person => this.onBoardPassanger(person));
    }

    onBoardPassanger(person) {
        this.collectTicket(person);
        this.passangers.push(person);
    }

    collectTicket(person) {
        const ticket = person.persentTicket();
        this.tickets.push(ticket.validateTicket());
    }

    getTicketSales() {
        return this.tickets.reduce((acc, ticket) => ticket.price + acc, 0);
    }

    static create(train) {
        return new Train(train.id, train.name);
    }
};
