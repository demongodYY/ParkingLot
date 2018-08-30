function ParkingBoy() {

}

const _prototype = ParkingBoy.prototype;

_prototype.setParkinglot = function(parkinglot) {
    this.parkinglot = parkinglot;
    return true;
};

_prototype.getParkinglot = function() {
    return this.parkinglot;
};



module.exports = ParkingBoy;