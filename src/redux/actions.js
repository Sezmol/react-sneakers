import {
  ADD_TO_CART,
  ADD_TO_FAVORITES,
  CHECKOUT,
  CLOSE_CART,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  HIDE_LOADING,
  OPEN_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITES,
  SHOW_LOADING,
} from './types';

export function fetchData() {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      const response = await fetch(
        'https://64525b4fbce0b0a0f74460e5.mockapi.io/items'
      );
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}

export function removeAllFromCart() {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
}

export function openCart() {
  return {
    type: OPEN_CART,
  };
}

export function closeCart() {
  return {
    type: CLOSE_CART,
  };
}

export function addToFavorites(item) {
  return {
    type: ADD_TO_FAVORITES,
    payload: item,
  };
}

export function removeFromFavorites(id) {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
}

export function checkout(items) {
  return {
    type: CHECKOUT,
    payload: items,
  };
}
