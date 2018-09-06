const Lot = require('../lib/Lot')

function Boy() {
    this.lots = [];
}

// Fisher-Yates算法
function shuffle(arr) {
    let result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}

Boy.prototype.addLot = function (lot) {
    this.lots.push(lot);
}

Boy.prototype.park = function (lot, car) {
    // if (lot.available == 0) {
    //     throw Error;
    // }
    lot.park(car);
}

Boy.prototype.randomSelection = (that) => {
    let availableLots = that.lots.filter(lot => lot.available > 0);
    let result = shuffle(availableLots);
    // 车场全满
    if (result.length == 0) {
        throw Error
    }
    return result[0];
}

Boy.prototype.get = function (lot, car) {
    lot.get(car);
}

module.exports = Boy;