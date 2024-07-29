// props和组件传值和插槽
import React from "react";
import { useState, useContext } from "react";
function Son(props) {
  // return (
  //   <div>
  //     <div>{props.a}</div>
  //     <div>{props.b}</div>
  //     <div>X：{props.x}</div>
  //     <div>Y：{props.y}</div>
  //   </div>
  // );
  let [msg, setMsg] = useState('666')
  console.log('这不更新')
  return (
    <div>
      {/* <div>X：{props.coordinate.x}</div>
      <div>Y：{props.coordinate.y}</div> */}
      这是子
      <button onClick={() => {
        setMsg('888')
      }}>子点击更新</button>
      <div>{msg}</div>
    </div>
  );
}

export default Son;
