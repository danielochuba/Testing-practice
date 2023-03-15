const {stringLength, reverseString, Calculator, capitalize} = require('./index');
const calc1 = new Calculator();

test('String of characters equal 6', () => {
  expect(stringLength('Daniel')).toBe(6);
});

if (stringLength('Daniel') !== 6){
    throw new Error('check not passed (Example 1)');
}

if (stringLength('Henry') !== 5){
    throw new Error('check not passed (Example 2) String is above 10 characters');
}

if (stringLength('hi') !== 2){
    throw new Error('check not passed (Example 3) String is Empty');
}


test('String reversed should be leinaD', () => {
    expect(reverseString('Daniel')).toBe('leinaD');
  });

if (reverseString('Henry') !== 'yrneH'){
    throw new Error('check not passed (Example 5) String not reverted');
}

describe('Calculator Tests for ADD, SUBTRACT, MULTIPLY', () => {
    describe('calc1.add() should display the correct value after adding the two numbers', () => {
        test('calc1.add(10, 2) should display 12', () => {
            expect(calc1.add(10, 2)).toBe(12)
        });
        test('calc1.add(4, 3) should display 7', () => {
            expect(calc1.add(4, 3)).toBe(7)
        });
        test('calc1.add(4, 5) should display 9', () => {
            expect(calc1.add(4, 5)).toBe(9)
        });
    });
    describe('calc1.subtract() should display a subtraction value', () => {
        test('calc1.subtract(10, 2) should display 8', () => {
            expect(calc1.subtract(10, 2)).toBe(8)
        });
        test('should display 6', () => {
            expect(calc1.subtract(8, 2)).toBe(6)
        });
        test('should display 4', () => {
            expect(calc1.subtract(6, 2)).toBe(4)
        });
    });
    describe('calc1.multiply() should display a multiplication value', () => {
        test('calc1.multiply(10, 2) should display 20', () => {
            expect(calc1.multiply(10, 2)).toBe(20)
        });
        test('calc1.multiply(5, 2) should display 10', () => {
            expect(calc1.multiply(5, 2)).toBe(10)
        });
        test('calc1.multiply(1, 2) should display 2', () => {
            expect(calc1.multiply(1, 2)).toBe(2)
        });
    });
    describe('calc1.divide() should display a division value', () => {
        test('calc1.divide(10, 2) should display 5', () => {
            expect(calc1.divide(10, 2)).toBe(5)
        });
        test('calc1.divide(8, 2) should display 4', () => {
            expect(calc1.divide(8, 2)).toBe(4)
        });
        test('calc1.divide(20, 2) should display 10', () => {
            expect(calc1.divide(20, 2)).toBe(10)
        });
    });
});

test('First character is Capitalized', () => {
    expect(capitalize('daniel')).toBe('Daniel');
});