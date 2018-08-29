function ParkingLot(capacity){
    if(capacity <= 0 || parseInt(capacity) !=capacity){
        throw Error;
    }
    this.capacity = capacity;
}
module.exports = ParkingLot;