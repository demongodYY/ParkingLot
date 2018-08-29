const ParkingLot = require('../lib/ParkingLot');
const Car = require('../lib/Car');
const chai = require('chai');
chai.should();

describe('oo-practice', () => {
  context('it is test', () => {
    specify('should be ok', () => {
      (1).should.be.eq(1);
    });
    it('should be not ok', () => {
      (1).should.be.not.eq(2)
    });
  });
  context('Parking Lot test',() => {
    it('there is a parking lot',()=> {
      const parkingLot = new ParkingLot();
      parkingLot.constructor.should.be.eq(ParkingLot);
    });
    it('there should be a car', () => {
      const car = new Car();
      car.constructor.should.be.eq(Car);
    });
  });
})