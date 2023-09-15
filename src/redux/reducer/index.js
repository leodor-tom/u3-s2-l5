const initialState = {
  city: { content: "" },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCHED_CITY":
      return {
        ...state,
        city: {
          ...state.city,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
