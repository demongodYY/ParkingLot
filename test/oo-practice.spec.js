const Obj = require('../lib/Obj');
const Parkinglot = require('../lib/Parkinglot')
const Car = require('../lib/Car')
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
    it('Should have parkinglot, and could set parkinglot capacity', () => {
      parkinglot = new Parkinglot(30)
      parkinglot.constructor.should.be.eq(Parkinglot)
      parkinglot.capacity.should.be.eq(30)
    });
    it('Should have car, and car could set license number', () => {
      car = new Car('XA1A123')
      car.constructor.should.be.eq(Car)
      car.license_num.should.be.eq('XA1A123')
    });
  });
})