import { PureComponent } from "react";
import "./Calculator.css";
import calculate from "../../logic/calculate";
class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  render() {
    const doCalculate = (e) => {
      let calculations = calculate(this.state, e.target.innerText);
      this.setState({
        total: calculations.total,
        next: calculations.next,
        operation: calculations.operation,
      });
    };

    return (
      <div className="calc-wrapper">
        <p className="calculations">
          {this.state.total} {this.state.operation} {this.state.next}
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
  }
}

export default Calculator;
