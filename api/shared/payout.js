'use strict';

const _ = require('lodash');
const money = require('./money');

/**
 * @class Payout
 * @author Erik August Johnson <erik@erikaugust.com>
 */
class Payout {
    constructor(owes, owed, amount) {
        this.owes = owes;
        this.owed = owed;
        this.amount = amount;
    }

    /**
     * Calculate money owed/owes for each person by their equal share
     * @param {Array<object>} people
     * @param {number} equalShare
     * @returns {*}
     */
    static calculateOwed(people, equalShare) {
        _.each(people, person => {
            if (person.amount < equalShare) {
                person.owes = money.parseAmount(equalShare - person.amount);
            } else if (person.amount > equalShare) {
                person.owed = money.parseAmount(person.amount - equalShare);
            }
        });
        return people;
    }

    /**
     * Calculates payouts for a list of people who owe or are owed
     * @param people
     * @returns {[]}
     */
    static calculatePayouts(people) {
        const owed = _.filter(people, person => person.owed);
        const owes = _.filter(people, person => person.owes);
        const payouts = [];
        _.each(owes, personOwes => {
            // Amount owed evenly divided by amount of people owed:
            const amount = money.parseAmount(personOwes.owes / owed.length);
            _.each(owed, personOwed => {
                payouts.push(new Payout(personOwes.name, personOwed.name, amount));
            });
        });
        return payouts;
    }
}

module.exports = Payout;