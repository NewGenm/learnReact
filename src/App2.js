import "./App.css";
import Chapter16 from "./chapter/chapter16/chapter16";
import React from "react";
import { connect } from "react-redux";

function App2(props) {
  console.log("app", props);
  return (
    <div>
      <Chapter16 store={props}></Chapter16>
    </div>
  );
}
// 使用tooikit
let newApp = connect(
  (state) => {
    console.log("state", state);
    return { ...state };
  },
  (dispatch) => {
    return {
      changeMsg(msg) {
        return dispatch({
          type: "mesSlice/changeMes",
          payload: msg,
        });
      },
      changeNum(num) {
        return dispatch({
          type: "numSlice/changeNum",
          payload: num,
        });
      },
    };
  }
)(App2);
console.log("newApp", newApp);
export default newApp;
