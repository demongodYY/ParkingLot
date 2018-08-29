const ParkingLot = require('../lib/ParkingLot');
const Car = require('../lib/Car');
const chai = require('chai');
chai.should();

describe('ParkingLot Project', () => {
  context('Parking Lot test',() => {
    it('there is a parking lot',()=> {
      const parkingLot = new ParkingLot();
      parkingLot.constructor.should.be.eq(ParkingLot);
    });
    it('there should be a car', () => {
      const car = new Car();
      car.constructor.should.be.eq(Car);
    });
    it('ParkingLot should have capacity',() => {
      const parkingLot1 = new ParkingLot(30);
      parkingLot1.capacity.should.eq(30);
    });
    it('capacity should not eq negtive number ', ()=>{
      (() => new ParkingLot(-1)).should.throw();
     (() => new ParkingLot(0.1)).should.throw();
     (() => new ParkingLot(0)).should.throw();
     (() => new ParkingLot("test")).should.throw();
    });

  });
})