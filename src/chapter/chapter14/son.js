// props和组件传值和插槽
import React from "react";
import { useState, useContext } from "react";
function Son(props) {
  console.log('这更新')
  return (
    <div>
      这是子
    </div>
  );
}

export default Son;
