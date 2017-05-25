import add from '../../src/math/add';
import multiply from '../../src/math/multiply';
var chai = require('chai');
chai.should();
const assert = chai.assert;
// var expect = require('chai').expect;

describe('Math', function () {
  describe('#add()', function () {
    it('参数为空应该报错', function () {
      assert.throws(() => add(), Error, "arguments should not empty");
    });

    it('1个参数应该返回参数本身', function () {
      add(1).should.equal(1);
    });

    it('2个参数', function () {
      add(1, 2).should.equal(3);
    });

    it('3个参数加入负数', function (done) {
      add(-5, 10).should.equal(5);
      setTimeout(function() {
        done();
      }, 1000); //异步执行 一秒后执行
    });
  
  });
});