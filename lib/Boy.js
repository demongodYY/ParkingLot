const Lot = require('../lib/Lot')
function Boy() {
    this.lots = [];
}

Boy.prototype.addLot = function (lot) {
    this.lots.push(lot)
}

module.exports = Boy;