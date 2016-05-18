'use strict';

var util = require('../../source/simple-functions.js').Utils();

describe('Test utils', function () {
    describe('sign function', function () {
        it('with -5', function () {
            expect(util.sign(-5)).toBe(-1);
        });
        it('with 5', function () {
            expect(util.sign(5)).toBe(1);
        });
        it('with 0', function () {
            expect(util.sign(0)).toBe(0); 
        });
    });
});