import { TOGGLE_DARK_MODE } from './actions';

const initialState = {
  isDarkMode: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      };
    default:
      return state;
  }
};

export default reducer;
