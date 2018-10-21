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

_prototype.getParkinglotByMax = function() {
    var max_available = 0;
    var parkinglot_index = -1;
    for (var i = 0; i < this.parkinglots.length; i++){
        if(this.parkinglots[i].available > max_available){
            max_available = this.parkinglots[i].available;
            parkinglot_index = i;
        }
    }
    if(max_available === 0) {
        throw Error('All Parkinglot are full');
    }
    return this.parkinglots[parkinglot_index]
};

_prototype.getParkinglotByRate = function() {
    var max_available = 0;
    var parkinglot_index = -1;
    for (var i = 0; i < this.parkinglots.length; i++){
        if(this.parkinglots[i].available > max_available){
            max_available = this.parkinglots[i].available;
            parkinglot_index = i;
        }
    }
    if(max_available === 0) {
        throw Error('All Parkinglot are full');
    }
    return this.parkinglots[parkinglot_index]
};

_prototype.findCar = function(car) {
    for (var i = 0; i < this.parkinglots.length; i++){
        if (this.parkinglots[i].checkCar(car) != -1){
            return this.parkinglots[i];
        } 
    }
    throw Error('Can\'t find your car');
};

_prototype.parking = function(car) {
    this.checkParkinglotWhenParking(car);
    return this.getParkinglotByMax().parking(car);
};

_prototype.parkingByMax = function(car) {
    this.checkParkinglotWhenParking(car);
    return this.getParkinglotByMax().parking(car);
};

_prototype.parkingByRate = function(car) {
    this.checkParkinglotWhenParking(car);
    return this.getParkinglotByRate().parking(car);
};

_prototype.pickUp = function(car) {
    return this.findCar(car).pickUp(car);
};

module.exports = ParkingBoy;