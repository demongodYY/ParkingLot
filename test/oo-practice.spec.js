const chai = require('chai');
const Parkinglot = require('../lib/Parkinglot');
const Car = require('../lib/Car');

chai.should();

describe('oo-practice', () => {
    context('it is test', () => {
        specify('should be ok', () => {
            (1).should.be.eq(1);
        });
        it('should be not ok', () => {
            (1).should.be.not.eq(2);
        });
        it('Should have parkinglot, and could set parkinglot capacity', () => {
            const parkinglot = new Parkinglot(30);
            parkinglot.constructor.should.be.eq(Parkinglot);
            parkinglot.capacity.should.be.eq(30);
        });
        it('Should have car, and car could set license number', () => {
            const car = new Car();
            car.constructor.should.be.eq(Car);
        });
        it('The car should be parking into parkinglot', () => {
            const parkinglot = new Parkinglot(1);
            const car = new Car();
            parkinglot.parking(car).should.be.eq(true)
            parkinglot.capacity.should.be.eq(1)
            parkinglot.available.should.be.eq(0)
        })
    });
});
