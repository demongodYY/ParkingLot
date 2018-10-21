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

_prototype.checkParkinglotWhenParking = function(car){
    for (var i = 0; i < this.parkinglots.length; i++){
        if(this.parkinglots[i].checkCar(car) != -1) {
            this.parkinglot[i].parking(car);
        }
    }
};

_prototype.getParkinglot = function() {
    for (var i = 0; i < this.parkinglots.length; i++){
        if(this.parkinglots[i].available > 0){
            return this.parkinglots[i];
        }
    }

    throw Error('All Parkinglot are full');
};

_prototype.findCar = function(car) {
    for (var i = 0; i < this.parkinglots.length; i++){
        if (this.parkinglots[i].checkCar(car) != -1){
            return this.parkinglots[i];
        } 
    }
    throw Error('Can\'t find your car');
}

_prototype.parking = function(car) {
    this.checkParkinglotWhenParking(car);
    return this.getParkinglot().parking(car);
};

_prototype.pickUp = function(car) {
    return this.findCar(car).pickUp(car);
};

module.exports = ParkingBoy;