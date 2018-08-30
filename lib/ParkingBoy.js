const Parkinglot = require('../lib/Parkinglot');
function ParkingBoy() {

}
const _prototype = ParkingBoy.prototype;

_prototype.setParkinglot = function(parkinglot) {
    if (parkinglot.constructor != Parkinglot){
        throw Error('Only parkinglot is valid');
    }
    this.parkinglot = parkinglot;
    return true;
};

_prototype.getParkinglot = function() {
    return this.parkinglot;
};

module.exports = ParkingBoy;