import "./App.css";
import Chapter16 from "./chapter/chapter16/chapter16";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chaneNumThunk, changeNum } from "./store/tooikitindex";

function App3(props) {
  let res = useSelector((state) => {
    console.log("state", state);
    return state;
  });
  let dispatch = useDispatch();
  return (
    <div>
      App3
      <Chapter16 store={res}></Chapter16>
      {/* <button
        onClick={() => {
          // changeNum(1);
          dispatch(changeNum(666))
        }}
      >
        改变num
      </button>
      <button
        onClick={() => {
          dispatch(chaneNumThunk(1))
        }}
      >
        异步改变num
      </button> */}
      {/* <div>{res.numReducer.num}</div> */}
    </div>
  );
}

export default App3;
