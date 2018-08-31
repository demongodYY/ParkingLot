const Parkinglot = require('../lib/Parkinglot');
// const Car = require('../lib/Car');
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

_prototype.parking = function(car) {
    return this.getParkinglot().parking(car);
};

_prototype.pickUp = function(car) {
    return this.getParkinglot().pickUp(car);
};

module.exports = ParkingBoy;