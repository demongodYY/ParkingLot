function Parkinglot (capacity) {
    if(capacity <= 0 || parseInt(capacity) != capacity) {
        throw Error('capacity should be positive integer');
    }
    this.capacity = capacity;
    this.available = capacity; 
    this.cars = Array(capacity).fill(0);
}

var _prototype = Parkinglot.prototype;

_prototype.checkCar = function() {
    return this.cars.findIndex((index) => {return index === 0;});
};

_prototype.parking = function(car) {
    this.available--;
    this.cars[this.checkCar()] = car;
    return true;
};

module.exports = Parkinglot;
