import { PureComponent } from "react";
import "./Calculator.css";
class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-wrapper">
        <p className="calculations">0</p>
        <div className="keypad">
          <ul className="keygrid">
            <li>AC</li>
            <li>+/-</li>
            <li>%</li>
            <li>÷</li>
          </ul>
          <ul className="keygrid">
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>x</li>
          </ul>
          <ul className="keygrid">
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>-</li>
          </ul>
          <ul className="keygrid">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>+</li>
          </ul>
          <ul className="keygrid last-keygrid">
            <li className="zero">0</li>
            <li>.</li>
            <li>=</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calculator;
