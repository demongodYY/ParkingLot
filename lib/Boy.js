const Lot = require('../lib/Lot')

function Boy() {
    this.lots = [];
}

Boy.prototype.addLot = function (lot) {
    this.lots.push(lot);
}

Boy.prototype.park = function (lot, car) {
    if (lot.available == 0) {
        throw Error;
    }
    lot.park(car);
}

module.exports = Boy;