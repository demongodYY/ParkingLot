function Lot(capacity = 1, id = 1001) {
    if (typeof capacity != 'number' || parseInt(capacity) != capacity || capacity <= 0) {
        throw Error;
    }
    this.capacity = capacity;
    this.available = this.capacity;
    this.cars = [];
    this.id = id;
}

Lot.prototype.park = function (car) {
    if (this.available > 0) {
        if (typeof (this.cars.find((e) => e == car.id)) != "undefined") { // 车场中已有该号牌
            throw Error;
        }
        this.cars.push(car.id);
        this.available--;
    } else {
        throw Error;
    }

}

Lot.prototype.get = function (car) {
    if (typeof (this.cars.find((e) => e == car.id)) == "undefined") { // 找不到号牌
        throw Error;
    }
    this.cars.splice(this.cars.indexOf(car.id), 1); // 去掉号牌
    
    this.available++;
}

module.exports = Lot;