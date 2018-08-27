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
})