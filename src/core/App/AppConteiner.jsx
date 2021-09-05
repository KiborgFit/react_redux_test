import { connect } from "react-redux";
import { asyncIncrement, clear, decrement, increment, setValue } from "../../actions/counterActions";
import App from "./App";

const mapStateToProps = (state, ownPtops) => {
  console.log(ownPtops);

  return { value: state.counter.value };
};

const mapDispatchToProps = {
  increment,
  decrement,
  setValue,
  clear,
  asyncIncrement,
};

export const AppConteiner = connect(mapStateToProps, mapDispatchToProps)(App);
