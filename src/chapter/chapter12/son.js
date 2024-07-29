// props和组件传值和插槽
import React from "react";
import { useState, useContext } from "react";
import { Context1 } from "./chapter12";
// import Son from "./son";
function Son() {
  let [msg, setMsg] = useState('这是儿子')
  let value = useContext(Context1)
  return <div>这是 SON
    <div>{msg}</div>
    <div>{value}</div>
  </div>;
}

export default Son;
