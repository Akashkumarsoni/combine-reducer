import { ICECREAMEINCREASE } from "./Constants";

const initialstate = {
  icecreame_quan: 10,
  icecreame_buy: 0,
};

export const icecreameReducer = (state = initialstate, actions) => {
  if (actions.type === ICECREAMEINCREASE) {
    if (state.icecreame_quan >= actions.value)
      return {
        ...state,
        icecreame_buy: actions.value,
        icecreame_quan: state.icecreame_quan - actions.value,
      };
   else{
    alert(`${actions.value} quantity not available and only ${state.icecreame_quan} available`)
   }
  }
  return { ...state };
};
