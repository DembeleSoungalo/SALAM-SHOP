import React, { useState } from 'react';
import styles from './Calculator.module.css';

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('addition');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'firstNumber') {
      setFirstNumber(value);
    } else if (name === 'secondNumber') {
      setSecondNumber(value);
    } else if (name === 'operation') {
      setOperation(value);
    }
  };

  const handleCalculate = () => {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    let calculatedResult;

    switch (operation) {
      case 'addition':
        calculatedResult = num1 + num2;
        break;
      case 'soustraction':
        calculatedResult = num1 - num2;
        break;
      case 'multiplication':
        calculatedResult = num1 * num2;
        break;
      case 'division':
        calculatedResult = num2 !== 0 ? num1 / num2 : 'Division by zero';
        break;
      default:
        calculatedResult = 'Invalid operation';
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <input
        type="number"
        name="firstNumber"
        value={firstNumber}
        onChange={handleInputChange}
        placeholder="First Number"
      />
      <input
        type="number"
        name="secondNumber"
        value={secondNumber}
        onChange={handleInputChange}
        placeholder="Second Number"
      />
      <select name="operation" value={operation} onChange={handleInputChange}>
        <option value="addition">Addition</option>
        <option value="soustraction">Soustraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;