const expect = require('chai').expect;
const calc = require('../calc');
describe('Test suit for calc', () => {

    before(() => {
        console.log('before...');
    });

    it('add should return 10 if a=5 and b = 5', () => {
        expect(calc.add(5, 5)).to.equal(10);
    });
    it('mul should return 10 if a=2 and b = 5', () => {
        expect(calc.mul(2, 5)).to.equal(10);
    });
});
