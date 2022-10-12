import { CAKEINCREASE } from "./Constants";

const initialstate = {
  cake_quan: 10,
  cake_buy: 0,
  stocks: "In Stock",
};

export const CakeReducer = (state = initialstate, actions) => {
  if (actions.type === CAKEINCREASE) {
    if (state.cake_quan >= actions.value)
      return {
        ...state,
        cake_buy: actions.value,
        cake_quan: state.cake_quan - actions.value,
      };
    else {
      alert(
        `${actions.value} quantity not available and only ${state.cake_quan} available`
      );
    }
  }
  return { ...state };
};
