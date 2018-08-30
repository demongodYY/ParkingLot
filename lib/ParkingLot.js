function ParkingLot(capacity){
    if(capacity <= 0 || parseInt(capacity) != capacity){
        throw Error;
    }
    this.capacity = capacity;
    this.slots = capacity;
    this.cars = Array(capacity).fill(0);
}
// ParkingLot.prototype = {
//     park: function(car){
//        this.cars.push(car);
//        this.slots--; 
       
//     }
//}
module.exports = ParkingLot;