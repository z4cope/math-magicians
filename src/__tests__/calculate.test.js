import { render } from '@testing-library/react';
import Calculator from '../components/calculator/Calculator';
import calculate from '../logic/calculate';

/*
The first test is all about testing the returned object from the calculation function
- Total
- Operation
- Next
 */

describe('Testing calculations methods', () => {
  const testingTotal = calculate({ total: 5, next: 5, operation: '+' }, '=');
  it('Addition method', () => {
    expect(testingTotal.total).toBe('10');
  });

  const testingOperation = calculate(
    { total: 5, next: 5, operation: '+' },
    '=',
  );
  it('Testing operation', () => {
    expect(testingOperation.operation).toBe(null);
  });

  const testingNextValue = calculate(
    { total: 5, next: 5, operation: '+' },
    '=',
  );
  it('Testing next value', () => {
    expect(testingNextValue.next).toBe(null);
  });

  const output = calculate({ total: 20, next: 5, operation: '-' }, '=');
  test('subtraction', () => {
    expect(output.total).toBe('15');
  });
});

// Component test
describe('Testing component', () => {
  it('Renders correctly', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
