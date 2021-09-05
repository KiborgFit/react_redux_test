import { CLEAR, DECREMENT, INCREMENT, SET_VALUE } from "../actions/counterActions";

const initialState = { value: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case SET_VALUE:
      return { ...state, value: action.payload };
    case CLEAR:
      return { ...initialState };
    default:
      return state;
  }
};
