const INITIAL_STATE = {
  currentCart: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_CART":
      return {
        ...state,
        currentCart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
