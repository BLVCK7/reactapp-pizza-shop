const initialState = {
  items: [],
};

const cart = (state = initialState, action) => {
  if (action.type === 'SET_SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default cart;
