import { buyCake, buyChocolate, buyIcecream } from "./Action";

export const mappropstostate = (state) => {
  return { ...state };
};

export const mappropstodispatch = (dispatch) => {
  return {
    buy_cake_quantity: (e) => dispatch(buyCake(e)),
    buy_icecreame_quantity: (e) => dispatch(buyIcecream(e)),
    buy_chocolate_quantity: (e) => dispatch(buyChocolate(e)),
  };
};
