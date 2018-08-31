const ParkingLot = require('../lib/ParkingLot');
const Car = require('../lib/Car');
const ParkingBoy = require('../lib/ParkingBoy')
const chai = require('chai');
chai.should();

describe('ParkingLot Project', () => {
  context('First Part',() => {
    it('there is a parking lot',()=> {
      const parkingLot = new ParkingLot(10);
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
    it('capacity should be positive integer number ', ()=>{
     (() => new ParkingLot(-1)).should.throw();
     (() => new ParkingLot(0.1)).should.throw();
     (() => new ParkingLot(0)).should.throw();
     (() => new ParkingLot("test")).should.throw();
    });
    it('ParkingLot can park a car', () => {
      const car = new Car();
      const parkingLot = new ParkingLot(10);
      parkingLot.park(car);
      parkingLot.slots.should.be.eq(9);
    });
    it('A same car cannot be parked again',() => {
      const car1 = new Car();
      const parkingLot = new ParkingLot(10);
      parkingLot.park(car1);
      parkingLot.slots.should.be.eq(9);
      (() => parkingLot.park(car1)).should.throw();
    })
  });
    it('a car parked in ParkingLot can be picked up from the ParkingLot.', () => {
      const car = new Car();
      const parkingLot = new ParkingLot(10);
      parkingLot.park(car);
      parkingLot.slots.should.be.eq(9);
      parkingLot.pickup(car);
      parkingLot.slots.should.be.eq(10);
    });
    it('a car cannot be picked up if the car did not park in ParkingLot', ()=> {
      const car = new Car();
      const parkingLot = new ParkingLot(10);
      (() => parkingLot.pickup(car)).should.throw();
    });
    it('There is a ParkingBoy', () => {
      const parkingBoy = new ParkingBoy();
      parkingBoy.constructor.should.be.eq(ParkingBoy);
    });
})