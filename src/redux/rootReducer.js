import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { cartReducer } from "./cartReducer";
import { favoritesReducer } from "./favoritesReducer";
import { purchasesReducer } from "./purchasesReducer";

export const rootReducer = combineReducers({
    appSneakers: appReducer,
    cartSneakers: cartReducer,
    favorites: favoritesReducer,
    purchases: purchasesReducer
})