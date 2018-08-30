function Parkinglot (capacity) {
    if(capacity <= 0 || parseInt(capacity) != capacity) {
        throw Error('capacity should be positive integer');
    }
    this.capacity = capacity;
    this.available = capacity; 
    this.cars = Array(capacity).fill(0);
}

var _prototype = Parkinglot.prototype;

_prototype.checkCarSeat = function() {
    return this.cars.findIndex((index) => {return index === 0;});
};

_prototype.checkCar = function(car) {
    return this.cars.findIndex((car_in_cars) => {return car_in_cars === car;});
};

_prototype.parking = function(car) {
    if(this.cars.find((car_in_cars) => {return car_in_cars === car;})){
        throw Error('You can\'t parking a car twice');
    }
    this.available--;
    this.cars[this.checkCarSeat()] = car;
    return true;
};

_prototype.pickUp = function(car) {
    if(this.checkCar(car) === -1){
        throw Error('The car didn\'t park here');
    }
    this.cars[this.checkCar(car)] = 0;
    this.available++;
    return true;
};

module.exports = Parkinglot;
