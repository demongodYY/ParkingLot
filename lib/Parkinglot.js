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
    if(this.cars.find((car_in_cars) => {return car_in_cars === car;})){
        throw Error('You can\'t parking a car twice');
    }
    this.available--;
    this.cars[this.checkCar()] = car;
    return true;
};

module.exports = Parkinglot;
