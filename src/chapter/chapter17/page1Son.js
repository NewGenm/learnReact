// props和组件传值和插槽
import React from "react";
import { useState, useContext } from "react";
function page1Son(props) {
  console.log('这更新')
  return (
    <div>
      page1Son
    </div>
  );
}

export default page1Son;
