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

_prototype.getParkinglot = function(car, is_parking) {
    if(is_parking){
        this.checkParkinglotWhenParking(car);
    }

    for (var i = 0; i < this.parkinglots.length; i++){
        var parkinglot = this.parkinglots[i];
        if(is_parking){
            if(parkinglot.available > 0){
                return parkinglot;
            }
        }
        else {
            if(parkinglot.checkCar(car) != -1){
                return parkinglot;
            }
        }
    }

    throw Error('Can\'t find your car or all Parkinglot are full');
};

_prototype.parking = function(car) {
    return this.getParkinglot(car, true).parking(car);
};

_prototype.pickUp = function(car) {
    return this.getParkinglot(car).pickUp(car);
};

module.exports = ParkingBoy;