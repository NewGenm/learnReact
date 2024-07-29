import {legacy_createStore as createStore} from 'redux';
function mesReducer(state = { msg: "nothing" }, action) {
  switch (action.type) {
    case "changeMsg":
      state.msg = action.payload;
      return { ...state };
    case "resetMsg":
      state.msg = "nothing";
      return { ...state };

    default:
      return state;
  }
}
let store = createStore(mesReducer)

export default store 