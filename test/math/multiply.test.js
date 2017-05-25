import add from '../../src/math/add';
import multiply from '../../src/math/multiply';
var chai = require('chai');
chai.should();
const assert = chai.assert;
// var expect = require('chai').expect;

describe('Math', function () {
  describe('#multiply() 乘法运算测试', function () {
    it('参数为空应该报错', function () {
      assert.throws(() => multiply(), Error, "arguments should not empty"); 
    }); 
    it('一个参数应该返回参数本身', function () {
      multiply(1).should.equal(1);
    });
    it('1*2 返回值应该是2 两个参数', function () {
      multiply(1, 2).should.equal(2);
    });
    it('1*2*-3 返回值应该是-6 三个参数加入负数', function () {
      multiply(1, 2, -3).should.equal(-6);
    });
  });
});