const chai = require('chai');
const Parkinglot = require('../lib/Parkinglot');
const Car = require('../lib/Car');
const ParkingBoy = require('../lib/ParkingBoy')

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
            const parkinglot = new Parkinglot(3);
            const car1 = new Car();
            const car2 = new Car();
            parkinglot.parking(car1).should.be.eq(true)
            parkinglot.available.should.be.eq(2)
            parkinglot.checkCar(car1).should.be.not.eq(-1)
            parkinglot.parking(car2).should.be.eq(true)
            parkinglot.available.should.be.eq(1)
            parkinglot.checkCar(car2).should.be.not.eq(-1)

        });
        it('The same car should not be parking twice', () => {
            const parkinglot = new Parkinglot(5);
            const car1 = new Car();
            parkinglot.parking(car1);
            (() => parkinglot.parking(car1)).should.throw();
        });
        it('The car should be pick up', () => {
            const parkinglot = new Parkinglot(5);
            const car1 = new Car();
            parkinglot.parking(car1);
            parkinglot.pickUp(car1).should.be.eq(true);
            parkinglot.available.should.be.eq(5);
        });
        it('It should throw error when try to pick up a car not in parkinglot', () => {
            const parkinglot = new Parkinglot(5);
            const car1 = new Car();
            (() => parkinglot.pickUp(car1)).should.throw();
            parkinglot.checkCar(car1).should.be.eq(-1)
        });
        it('Should have ParkingBoy', () => {
            const parkingBoy = new ParkingBoy();
            parkingBoy.constructor.should.be.eq(ParkingBoy);
        });
        it('ParkingBoy should manage Parkinglot', () => {
            const parkingBoy = new ParkingBoy();
            const parkinglot = new Parkinglot(10);
            parkingBoy.setParkinglot(parkinglot).should.be.eq(true);
            parkingBoy.getParkinglot().should.be.eq(parkinglot);
        });
        it('ParkingBoy should only manage parkinglot', () => {
            const parkingBoy = new ParkingBoy();
            (() => parkingBoy.setParkinglot(1)).should.throw();
            (() => parkingBoy.setParkinglot('parkinglot')).should.throw();
            (() => parkingBoy.setParkinglot(true)).should.throw();
            (() => parkingBoy.setParkinglot(1.1)).should.throw();
            (() => parkingBoy.setParkinglot([new Parkinglot(1)])).should.throw();
        });
        it('ParkingBoy should parking and pick up', () => {
            const parkingBoy = new ParkingBoy();
            const parkinglot = new Parkinglot(10);
            const car1 = new Car();
            const car2 = new Car();
            parkingBoy.setParkinglot(parkinglot);
            parkingBoy.parking(car1).should.be.eq(true);
            parkingBoy.parking(car2).should.be.eq(true);
            parkingBoy.pickUp(car1).should.be.eq(true);
            parkingBoy.pickUp(car2).should.be.eq(true);
            
        });
        it('ParkingBoy should only parking and pick up car', () => {
            const parkingBoy = new ParkingBoy();
            const parkinglot = new Parkinglot(20);
            parkingBoy.setParkinglot(parkinglot);
            (() => parkingBoy.parking(1)).should.throw();
            (() => parkingBoy.pickUp(1)).should.throw();
            (() => parkingBoy.parking('car')).should.throw();
            (() => parkingBoy.pickUp('car')).should.throw();
            
        })

    });
});
