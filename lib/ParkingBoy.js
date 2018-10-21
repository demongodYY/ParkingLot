const Parkinglot = require('../lib/Parkinglot');
// const Car = require('../lib/Car');
function ParkingBoy() {

}
const _prototype = ParkingBoy.prototype;

_prototype.setParkinglots = function(parkinglots) {
    if (parkinglots.constructor != Array){
        throw Error('Only parkinglots list is valid');
    }
    for (var i = 0; i < parkinglots.length; i++){
        if (parkinglots[i].constructor != Parkinglot) {
            throw Error('Only parkinglots is valid');
        }
    }
    this.parkinglots = parkinglots;
};

_prototype.getParkinglots = function() {
    return this.parkinglots;
};

_prototype.getParkinglot = function() {
    for (var i = 0; i < this.parkinglots.length; i++){
        if(this.parkinglots[i].available > 0){
            return this.parkinglots[i];
        }
    }
};

_prototype.parking = function(car) {
    return this.getParkinglot().parking(car);
};

_prototype.pickUp = function(car) {
    return this.getParkinglot().pickUp(car);
};

module.exports = ParkingBoy;