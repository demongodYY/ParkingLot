const ParkingLot = require('../lib/Car')
function ParkingBoy(){
    
}
ParkingBoy.prototype.setParkingLot = function(parkinglot){
    this.parkinglot = parkinglot;
}
ParkingBoy.prototype.getParkingLot = function(){
    return this.parkinglot;
}
module.exports = ParkingBoy;