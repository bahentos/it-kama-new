const fsum = require('./fsum');

describe('check fsum', () => {
    test('Корректное значение', () => {
        expect(fsum(2,2)).toBe(4)
    })
})