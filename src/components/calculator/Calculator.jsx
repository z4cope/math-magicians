import { useState } from "react";
import "./Calculator.css";
import calculate from "../../logic/calculate";
const Calculator = () => {
  const [calc, setCalc] = useState({ total: 0, next: null, operation: null });
  const doCalculate = (e) => {
    let calculations = calculate(calc, e.target.innerText);
    setCalc({
      total: calculations.total,
      next: calculations.next,
      operation: calculations.operation,
    });
  };

  return (
    <div className="calc-wrapper">
      <p className="calculations">
        {calc.total} {calc.operation} {calc.next}
      </p>
      <div className="keypad">
        <ul className="keygrid">
          <li onClick={doCalculate}>AC</li>
          <li onClick={doCalculate}>+/-</li>
          <li onClick={doCalculate}>%</li>
          <li onClick={doCalculate}>÷</li>
        </ul>
        <ul className="keygrid">
          <li onClick={doCalculate}>7</li>
          <li onClick={doCalculate}>8</li>
          <li onClick={doCalculate}>9</li>
          <li onClick={doCalculate}>x</li>
        </ul>
        <ul className="keygrid">
          <li onClick={doCalculate}>4</li>
          <li onClick={doCalculate}>5</li>
          <li onClick={doCalculate}>6</li>
          <li onClick={doCalculate}>-</li>
        </ul>
        <ul className="keygrid">
          <li onClick={doCalculate}>1</li>
          <li onClick={doCalculate}>2</li>
          <li onClick={doCalculate}>3</li>
          <li onClick={doCalculate}>+</li>
        </ul>
        <ul className="keygrid last-keygrid">
          <li className="zero" onClick={doCalculate}>
            0
          </li>
          <li onClick={doCalculate}>.</li>
          <li onClick={doCalculate}>=</li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
