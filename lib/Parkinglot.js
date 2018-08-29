function Parkinglot (capacity) {
    if(capacity <= 0 || parseInt(capacity) != capacity) {
        throw Error('capacity should be positive integer');
    }
    this.capacity = capacity;
    this.available = capacity; 
    this.cars = Array(capacity).fill(0);
}

function checkCar() {
    return this.cars.findIndex((index) => {return index === 0;});
}

Parkinglot.prototype.parking = function(car) {
    this.available--;
    this.cars[checkCar] = car;
    return true;
};

module.exports = Parkinglot;
