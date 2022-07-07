

const validateValue = require('./validateValue')

describe('validateValue', () => {
    test('Корректные значения', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Верхняя граница', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('Нижняя граница', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Меньше корректного', () => {
        expect(validateValue(-10)).toBe(false)
    })
    test('Больше корректного', () => {
        expect(validateValue(150)).toBe(false)
    })
})