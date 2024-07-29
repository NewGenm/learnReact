import "./App.css";
// import Chapter2 from './chapter/chapter2';
// import Chapter3 from './chapter/chapter3';
// import Chapter4 from './chapter/chapter4';
// import Chapter5 from './chapter/chapter5';
// import Chapter6 from './chapter/chapter6';
// import Chapter7 from './chapter/chapter7/chapter7';
// import Chapter8 from './chapter/chapter8/chapter8';
// import Chapter9 from './chapter/chapter9';
// import Chapter10 from './chapter/chapter10/chapter10';
// import Chapter11 from './chapter/chapter11/chapter11';
// import Chapter12 from './chapter/chapter12/chapter12';
// import Chapter13 from './chapter/chapter13/chapter13';
// import Chapter14 from './chapter/chapter14/chapter14';
// import Chapter15 from './chapter/chapter15/chapter15';
import Chapter16 from "./chapter/chapter16/chapter16";
import React from "react";
import { connect } from "react-redux";

function App(props) {
  console.log("app", props);
  return (
    <div>
      <Chapter16 store={props}></Chapter16>
    </div>
  );
}

let newApp = connect((state) => {
  console.log("state", state);
  return { ...state };
},(dispatch) => {
  return {
    changeMsg(msg) {
      return dispatch({
        type: 'changeMsg',
        payload: msg
      })
    }
  }
})(App);
console.log("newApp", newApp);
export default newApp;
