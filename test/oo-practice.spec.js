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
        it('The capacity should be positive integer', () => {
            (() => new Parkinglot(0)).should.throw();
            (() => new Parkinglot(-1)).should.throw();
            (() => new Parkinglot(1.5)).should.throw();
            (() => new Parkinglot("bad")).should.throw();
        })
        it('Should have car', () => {
            const car = new Car();
            car.constructor.should.be.eq(Car);
        });
        it('The car should be parking into parkinglot', () => {
            const parkinglot = new Parkinglot(1);
            const car = new Car();
            parkinglot.parking(car).should.be.eq(true)
            parkinglot.capacity.should.be.eq(1)
            parkinglot.available.should.be.eq(0)
            parkinglot.cars.length.should.be.eq(1)
        })
    });
});
