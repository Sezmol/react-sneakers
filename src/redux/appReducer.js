import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  HIDE_LOADING,
  SHOW_LOADING,
} from './types';

const initialState = {
  loading: true,
  sneakers: [],
  error: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, sneakers: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, sneakers: [], error: action.payload };
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
