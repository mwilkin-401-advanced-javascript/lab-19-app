'use strict';

const convertCase = require('../../lib/convertCase.js');

describe('`convertCase` function', () => {
  it('should transform its argument text to uppercase', () => {
    const text = 'test';
    const buffIn = Buffer.from(text);
    const buffOut = convertCase(buffIn);
    const result = 'TEST';
    expect(buffOut.toString()).toBe(result);
  });
  it('should accept and return a buffer', () => {
    const text = 'test';
    const buffIn = Buffer.from(text);
    const result = 'TEST';
    const buffOut = Buffer.from(result);
    expect(convertCase(buffIn)).toEqual(buffOut);
  });
});
