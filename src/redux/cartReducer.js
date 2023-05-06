import {
  ADD_TO_CART,
  CLOSE_CART,
  OPEN_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
} from './types';

const initialState = {
  cartSneakers: [],
  cartIsOpen: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartSneakers: [...state.cartSneakers, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartSneakers: state.cartSneakers.filter(
          (elem) => elem.id !== action.payload
        ),
      };
    case REMOVE_ALL_FROM_CART:
      return { ...state, cartSneakers: [] };
    case CLOSE_CART:
      return { ...state, cartIsOpen: false };
    case OPEN_CART:
      return { ...state, cartIsOpen: true };
    default:
      return state;
  }
};
