import { CHECKOUT } from './types';

const initialState = {
  purchases: [],
};

export const purchasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT:
      return { ...state, purchases: [...state.purchases, ...action.payload] };
    default:
      return state;
  }
};
