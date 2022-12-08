import operate from '../logic/operate';

describe('operations in calculator', () => {
  test('multiply 3*3 to equal 9', () => {
    const result = operate(3, 3, 'x');
    expect(result).toBe('9');
  });
  test('substraction to subtract 10-2', () => {
    const substract = operate(1, 2, '-');
    expect(substract).toBe('-1');
  });
  test('division of 8/2', () => {
    const divide = operate(8, 2, '÷');
    expect(divide).toBe('4');
  });
  test('addition of 10+5', () => {
    const sum = operate(10, 5, '+');
    expect(sum).toBe('15');
  });
  test('modulos', () => {
    const modulos = operate(5, 2, '%');
    expect(modulos).toBe('1');
  });
});
