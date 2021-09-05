import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { clear, decrement, increment, setValue } from '../../actions/counterActions';
import PropTypes from 'prop-types';
import './App.scss';

const App = ({ increment, decrement, clear, setValue, value, asyncIncrement }) => (
  <div className='App'>
    <h1>Hello world!</h1>
    Value: { value }

    <button onClick={increment}>+</button>
    <button onClick={asyncIncrement}> async +</button>
    <button onClick={decrement}>-</button>
    <button onClick={clear}>CLEAR</button>
    <button onClick={() => { setValue(5); }}>SET FIVE</button>

  </div>
);

App.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  asyncIncrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

// App.defaultProps = {
//   increment: () => {},
//   decrement: () => {},
//   clear: () => {},
//   setValue: () => {},
//   value: 0,
// };

export default App;
