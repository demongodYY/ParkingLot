const Car = require('../lib/Car');

function Parkinglot (capacity) {
    if(capacity <= 0 || parseInt(capacity) != capacity) {
        throw Error('capacity should be positive integer');
    }
    this.capacity = capacity;
    this.available = capacity; 
    this.cars = Array(capacity).fill(0);
}

var _prototype = Parkinglot.prototype;

_prototype.getEmtpyCarSeat = function() {
    var index_seat = this.cars.indexOf(0);
    if (index_seat == -1){
        throw Error('Parkinglot is full');
    }  
    return index_seat;
};

_prototype.checkCar = function(car) {
    return this.cars.indexOf(car);
};

_prototype.checkCarType = function(car) {
    if(car.constructor != Car){
        throw Error('Only car can be parking');
    } 
};

_prototype.parking = function(car) {
    if(this.available === 0){
        throw Error('ParkingLot is full');
    }
    this.checkCarType(car);
    if(this.cars.indexOf(car) != -1){
        throw Error('You can\'t parking a car twice');
    }
    this.available--;
    this.cars[this.getEmtpyCarSeat()] = car;
    return true;
};

_prototype.pickUp = function(car) {
    this.checkCarType(car);
    if(this.checkCar(car) === -1){
        throw Error('This car didn\'t park here');
    }
    this.cars[this.checkCar(car)] = 0;
    this.available++;
    return true;
};

module.exports = Parkinglot;
