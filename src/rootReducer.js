const INITIAL_STATE = { src: "", text: "" };
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_SRC":
      return { ...state, src: action.payload };
    case "CHANGE_TEXT":
      return { ...state, text: action.payload };
    case "RESET":
      return { ...state, src: "", text: "" };
    default:
      return state;
  }
};

export default rootReducer;
