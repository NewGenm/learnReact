// props和组件传值和插槽
import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import Son from "./son";
import TestHoc from './hooks/TestHoc';
import MouseWatch from './hooks/MouseWatch';
import MemoHoc from './hooks/MemoHoc';
let HocSon = TestHoc(Son)
let MousesCON = MouseWatch(Son)
let MemoSon = MemoHoc(Son)
function Chapter13() {
  let [msg, setMsg] = useState('123')
  console.log('更新333')
  return (
    // <div>
    //   <HocSon b={'这是父传的内容'}></HocSon>
    //   <MousesCON></MousesCON>
    // </div>
    // <div>
    //   <MousesCON></MousesCON>
    // </div>
    <div>
      <button onClick={() => {
        setMsg('222')
      }}>点击更新</button>
      <div>{msg}</div>
      <MemoSon></MemoSon>
    </div>
  );
}

export default Chapter13;
