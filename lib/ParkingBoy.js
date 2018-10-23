const ParkingLot = require('../lib/Car')
function ParkingBoy(){
    
}
ParkingBoy.prototype.setParkingLot = function(parkinglot){
    if(this.parkinglot != undefined){
        throw Error;
    }else{
        this.parkinglot = parkinglot;}
    

}
ParkingBoy.prototype.getParkingLot = function(){
    return this.parkinglot;
}
ParkingBoy.prototype.park = function(car){
    this.parkinglot.park(car);
}
ParkingBoy.prototype.pickup = function(car){
    this.parkinglot.pickup(car);
}
module.exports = ParkingBoy;