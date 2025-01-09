import React, { useReducer } from 'react';
import './Calculator.module.css'
const initialState = {
  displayValue: 0,
  previousValue: null,
  operator: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'DIGIT':
      return {
        ...state, // Preserve previous state
        displayValue: state.displayValue * 10 + action.payload,
                                   // Or, for handling floats:
                                   // parseFloat(`${state.displayValue}${action.payload}`)
      };
    case 'OPERATOR':
      return {
        ...state,
        operator: action.payload,
        previousValue: state.displayValue,
        displayValue: 0, // Reset for next input
      };
    case 'EQUALS': {
      const currentValue = state.displayValue;
      let newValue;

      switch (state.operator) {
        case '+':
          newValue = state.previousValue + currentValue;
          break;
        case '-':
          newValue = state.previousValue - currentValue;
          break;
        case '*':
          newValue = state.previousValue * currentValue;
          break;
        case '/':
          newValue = state.previousValue / currentValue;
          break;
        default:
          return state;  // Or handle other cases as needed.
      }
      return {
        ...state,
        displayValue: newValue,
        previousValue: null, // Reset after calculation
        operator: null,
      };
    }
    case 'CLEAR':
      return initialState;  // Reset to initial state
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDigitClick = (digit) => {
    dispatch({ type: 'DIGIT', payload: digit });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: 'OPERATOR', payload: operator });
  };


  return (
    <div>
      <h1>Calculator</h1>
      <p className='input'>{state.displayValue}</p>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(digit => (
          <button key={digit} onClick={() => handleDigitClick(digit)} className="button">{digit}</button>
        ))}
      </div>
      <div>
      <button onClick={() => handleOperatorClick('+')} className="button">+</button>
        <button onClick={() => handleOperatorClick('-')} className="button">-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')} className="button">/</button>
        <button onClick={() => dispatch({ type: 'EQUALS' })} className="button">=</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })} className="button">C</button>

      </div>
    </div>
  );
};

export default Calculator;

