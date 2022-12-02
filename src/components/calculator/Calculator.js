import { useState } from 'react';
import './Calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({ total: 0, next: null, operation: null });
  const doCalculate = (e) => {
    const calculations = calculate(calc, e.target.innerText);
    setCalc({
      total: calculations.total,
      next: calculations.next,
      operation: calculations.operation,
    });
  };

  return (
    <div className="calc-wrapper">
      <p className="calculations">
        {calc.total}
        {' '}
        {calc.operation}
        {' '}
        {calc.next}
      </p>
      <div className="keypad">
        <div className="keygrid">
          <button type="button" onClick={doCalculate}>
            AC
          </button>
          <button type="button" onClick={doCalculate}>
            +/-
          </button>
          <button type="button" onClick={doCalculate}>
            %
          </button>
          <button type="button" onClick={doCalculate}>
            ÷
          </button>
        </div>
        <div className="keygrid">
          <button type="button" onClick={doCalculate}>
            7
          </button>
          <button type="button" onClick={doCalculate}>
            8
          </button>
          <button type="button" onClick={doCalculate}>
            9
          </button>
          <button type="button" onClick={doCalculate}>
            x
          </button>
        </div>
        <div className="keygrid">
          <button type="button" onClick={doCalculate}>
            4
          </button>
          <button type="button" onClick={doCalculate}>
            5
          </button>
          <button type="button" onClick={doCalculate}>
            6
          </button>
          <button type="button" onClick={doCalculate}>
            -
          </button>
        </div>
        <div className="keygrid">
          <button type="button" onClick={doCalculate}>
            1
          </button>
          <button type="button" onClick={doCalculate}>
            2
          </button>
          <button type="button" onClick={doCalculate}>
            3
          </button>
          <button type="button" onClick={doCalculate}>
            +
          </button>
        </div>
        <div className="keygrid last-keygrid">
          <button type="button" className="zero" onClick={doCalculate}>
            0
          </button>
          <button type="button" onClick={doCalculate}>
            .
          </button>
          <button type="button" onClick={doCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
