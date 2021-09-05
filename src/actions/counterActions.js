export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_VALUE = 'SET_VALUE';
export const CLEAR = 'CLEAR';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setValue = (value) => ({ type: SET_VALUE, payload: value });
export const clear = () => ({ type: CLEAR });
// eslint-disable-next-line arrow-body-style
export const asyncIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};
