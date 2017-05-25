// const jsdom = require('mocha-jsdom');

const jsdom = require("jsdom");
const { JSDOM } = jsdom; 

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);


const chai = require('chai');
chai.should();
const expect = chai.expect;

describe('mocha tests', function () {
 
  // jsdom();
 
  it('has document', function () {
    const div = dom.window.document.createElement('div');
    expect(div.nodeName).eq("DIV");
  })
 
})