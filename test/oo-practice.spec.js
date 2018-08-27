const Obj = require('../lib/Obj');
const Parkinglot = require('../lib/Parkinglot')
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
  });
})