function ParkingLot(capacity){
    if(capacity <= 0 || parseInt(capacity) != capacity){
        throw Error;
    }
    this.capacity = capacity;
    this.slots = capacity;
    this.cars = Array(capacity).fill(0);
}
ParkingLot.prototype.park = function(car){
    if(this.cars.find((car_in_cars) => {return car_in_cars === car;})){
        throw Error("same car cannot park again");
    }else{
        this.cars.push(car);
        this.slots--;
    }
ParkingLot.prototype.pickup = function(car){
    if(this.cars.find((car_in_cars) => {return car_in_cars === car})){
    carIndex = this.cars.findIndex((car_in_cars) => {return car_in_cars === car});
    this.cars.splice(carIndex,1);
    this.slots++;
        }else{
            throw Error("cannot find the car. pick up error")
        }
    }
}
module.exports = ParkingLot;