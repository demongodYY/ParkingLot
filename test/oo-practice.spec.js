const Obj = require('../lib/Obj');
const Lot = require('../lib/Lot');
const Car = require('../lib/Car');

const chai = require('chai');
expect = chai.expect;
chai.should();

describe('oo-practice', () => {
  context('it is test', () => {
    specify('should be ok', () => {
      (1).should.be.eq(1);
    });
    it('should be not ok', () => {
      (1).should.be.not.eq(2)
    });
    it('shold load obj', () => {
      const obj = new Obj();
      obj.constructor.should.be.eq(Obj);
    });
  });

  context('parking lot test', ()=> {
    it('this is a parking lot', ()=> {
      const lot = new Lot();
      lot.constructor.should.be.eq(Lot); // 判断类别
    });
    it('this is a car', ()=>{
      const car = new Car();
      car.constructor.should.be.eq(Car);
    });

    // 停车场容量限制
    // 容量必须是数字
    it('lot capacity should be number', ()=>{
      const lot = new Lot(2);
      lot.capacity.should.to.be.a('number');
    });
    // 容量必须是正整数
    it('lot capacity should not be negtive', ()=>{
      (()=>new Lot(-1)).should.throw();
      (()=>new Lot(1.1)).should.throw();
      (()=>new Lot('-1')).should.throw();
    });

    // 判断停车场是否可以停车，即停车场是否有空位
    it('lot is not available', ()=>{
      const lot = new Lot();
      lot.available.should.be.gt(0);
    });

    // 定义停车行为
    it('park my car', ()=>{
      const lot = new Lot(1); // 5车位停车场
      const car = new Car(123); // 车牌为123的车
      lot.park(car);
      lot.available.should.be.eq(0); // 停车后是否减车位
      lot.cars.find((e)=>e==car.id).should.be.eq(car.id); // 停车后车是否在车场内
      
      const car2 = new Car(234); // 车牌为234的车
      (()=>lot.park(car2)).should.throw(); // 车位不够时抛出错误
    });

    // 同一台车不能停两次
    it('can not park car twice', ()=>{
      const lot = new Lot(5);
      const car = new Car(123);
      lot.park(car);
      (()=>lot.park(car)).should.throw(); // 同一台车停第二次时抛出错误
    });
    
    // 定义取车行为
    it('get my car', ()=>{
      const lot = new Lot(5); // 5车位停车场
      const car = new Car(123); // 车牌为123的车
      lot.park(car); // 先停车
      lot.get(car); // 再取车
      lot.available.should.be.eq(5); // 取车后是否加车位
      expect(lot.cars.find((e)=>e==car.id)).to.be.an("undefined"); // 取车后号牌不应在车场内
      (()=>lot.get(car)).should.throw(); // 找不到对应号牌时抛出错误
    });

    // 同一台车不能取两次
    it('can not get your car twice', ()=>{
      const lot = new Lot(5);
      const car = new Car(123);
      lot.park(car); // 先停车
      lot.get(car); // 再取车
      (()=>lot.get(car)).should.throw(); // 同一台车取第二次时抛出错误
    });
  })
})