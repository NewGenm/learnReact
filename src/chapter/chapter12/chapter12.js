// props和组件传值和插槽
import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";
import Son from "./son";
export let Context1 = React.createContext()
function Chapter12() {
  // 函数内相对于render的作用
  // return相当于组件中的html数据
  // 函数组件不写state，响应式数据通过useState定义

  // [返回值，修改值的方法]
  let [msg, setMsg] = useState("这是数据");
  let [msg2, setMsg2] = useState("这是监听数据");
  let [arr, setArr] = useState([1, 2, 3]);
  useEffect(() => {
    console.log("挂载或者更新");
  });
  useEffect(() => {
    console.log("只挂载不更新");
  }, []);
  useEffect(() => {
    console.log("监听数据");
  }, [msg2]);
  let allArr = useMemo(() => {
    console.log("变化");
    return arr.reduce((pre, next) => {
      return pre + next;
    });
  }, [arr]);

  let testRef = useRef("testRef");
  useEffect(() => {
    console.log(testRef.current);
  }, []);
  return (
    <div>
      这是 Chapter12
      <div>{msg}</div>
      <div>{msg2}</div>
      <div>{allArr}</div>
      <button
        onClick={() => {
          setMsg("变成0");
        }}
      >
        变化
      </button>
      <button
        onClick={() => {
          setMsg2(msg2 + 1);
        }}
      >
        变化2
      </button>
      <button
        onClick={() => {
          setArr(() => {
            let _arr = [...arr];
            _arr.push(4);
            return _arr;
          });
        }}
      >
        变化3
      </button>
      <Context1.Provider value={'父传子'}>
          <Son></Son>
        </Context1.Provider>
      <div ref={testRef}>这是ref</div>
    </div>
  );
}

export default Chapter12;
