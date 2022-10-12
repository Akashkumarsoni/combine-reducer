import { CHOCOLATEINCREASE } from "./Constants";

const initialstate = {
  chocolate_quan: 10,
  chocolate_buy: 0,
  stocks: "In Stock",
};

export const chocolateReducer = (state = initialstate, actions) => {
  if (actions.type === CHOCOLATEINCREASE) {
    if (state.chocolate_quan >= actions.value)
      return {
        ...state,
        chocolate_buy: actions.value,
        chocolate_quan: state.chocolate_quan - actions.value,
      };
    else {
      alert(
        `${actions.value} quantity not available and only ${state.chocolate_quan} available`
      );
    }
  }
  return { ...state };
};
