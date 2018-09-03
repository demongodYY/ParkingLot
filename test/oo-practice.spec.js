const Obj = require('../lib/Obj');
const Lot = require('../lib/Lot');
const Car = require('../lib/Car');
const Boy = require('../lib/Boy');

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

  context('parking lot test', () => {
    it('this is a parking lot', () => {
      const lot = new Lot();
      lot.constructor.should.be.eq(Lot); // 判断类别
    });
    it('this is a car', () => {
      const car = new Car();
      car.constructor.should.be.eq(Car);
    });

    // 停车场容量限制
    // 容量必须是数字
    it('lot capacity should be number', () => {
      const lot = new Lot(2);
      lot.capacity.should.to.be.a('number');
    });
    // 容量必须是正整数
    it('lot capacity should not be negtive', () => {
      (() => new Lot(-1)).should.throw();
      (() => new Lot(1.1)).should.throw();
      (() => new Lot('-1')).should.throw();
    });

    // 判断停车场是否可以停车，即停车场是否有空位
    it('lot is not available', () => {
      const lot = new Lot();
      lot.available.should.be.gt(0);
    });

    // 定义停车行为
    it('park my car', () => {
      const lot = new Lot(1); // 5车位停车场
      const car = new Car(123); // 车牌为123的车
      lot.park(car);
      lot.available.should.be.eq(0); // 停车后是否减车位
      lot.cars.find((e) => e == car.id).should.be.eq(car.id); // 停车后车是否在车场内

      const car2 = new Car(234); // 车牌为234的车
      (() => lot.park(car2)).should.throw(); // 车位不够时抛出错误
    });

    // 同一台车不能停两次
    it('can not park car twice', () => {
      const lot = new Lot(5);
      const car = new Car(123);
      lot.park(car);
      (() => lot.park(car)).should.throw(); // 同一台车停第二次时抛出错误
    });

    // 定义取车行为
    it('get my car', () => {
      const lot = new Lot(5); // 5车位停车场
      const car = new Car(123); // 车牌为123的车
      lot.park(car); // 先停车
      lot.get(car); // 再取车
      lot.available.should.be.eq(5); // 取车后是否加车位
      expect(lot.cars.find((e) => e == car.id)).to.be.an("undefined"); // 取车后号牌不应在车场内
      (() => lot.get(car)).should.throw(); // 找不到对应号牌时抛出错误
    });

    // 同一台车不能取两次
    it('can not get your car twice', () => {
      const lot = new Lot(5);
      const car = new Car(123);
      lot.park(car); // 先停车
      lot.get(car); // 再取车
      (() => lot.get(car)).should.throw(); // 同一台车取第二次时抛出错误
    });
  });

  // 停车哥
  context(('parking boy'), () => {
    // 定义停车哥
    it('this is a parking boy', () => {
      const boy = new Boy();
      boy.constructor.should.be.eq(Boy) // BOY
    });
    // 停车哥管理停车场
    it('boy manages a park', () => {
      const boy = new Boy();
      const lot = new Lot(3);
      boy.addLot(lot); // 为小哥添加车场
      boy.lots.length.should.be.eq(1); // 添加车场是否成功
      boy.lots.forEach(element => {
        element.constructor.should.be.eq(Lot) // 每个停车场都是Lot类
      });
    });
    // 停车哥可以停车
    it('boy can park a car', () => {
      const lot = new Lot(1);
      const car = new Car(123);
      const boy = new Boy();
      boy.addLot(lot);
      boy.lots.length.should.be.eq(1);
      boy.park(lot, car); // 此处为车场添加id属性，便于小哥将来车停到指定车场
      lot.cars.indexOf(car.id).should.be.not.eq(-1)// 车被停入车场
      lot.available.should.be.eq(0) // 车场车位减1
      const car2 = new Car(234);
      (() => boy.park(lot, car2)).should.throw(); // 车场有车位才能停车
    });
    // 停车哥可以取车
    it('boy can get a car', () => {

    });
  })
})