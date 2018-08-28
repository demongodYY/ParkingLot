function Parkinglot (capacity) {
    this.capacity = capacity;
    this.available = capacity; 
    this.cars = Array(capacity).fill(0);
}

Parkinglot.prototype = {
    parking: function(car) {
        this.available--;
        this.cars.push(car);
        return true;
    }};

module.exports = Parkinglot;
