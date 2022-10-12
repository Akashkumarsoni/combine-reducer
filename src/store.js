import { createStore,combineReducers } from "redux";
import { CakeReducer } from "./redux/CakeReducer";
import { icecreameReducer } from "./redux/IcecreameReducer";
import { chocolateReducer } from "./redux/ChocolateReducer";
const combination = combineReducers({CakeReducer,icecreameReducer,chocolateReducer});
const store = createStore(combination)

export default store;