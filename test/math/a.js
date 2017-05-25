import add from '../../src/math/add';
import multiply from '../../src/math/multiply';
var chai = require('chai');
chai.should();

// 命名不符合规范 这个文件是不会被自动测试调用的

// var expect = require('chai').expect;
describe('Math', function () {
  describe('#a()', function () {
    it('should save without error', function (done) {
      add(1).should.equal(1);
      add(1, 2).should.equal(3);
      add(-5, 10).should.equal(5);
      add(-5, 10, -16).should.equal(-11);
      done();
    });
  });
});