const Obj = require('../lib/Obj');

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