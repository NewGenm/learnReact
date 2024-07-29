// props和组件传值和插槽
import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useContext } from "react";
function Page1(props) {
  console.log('这更新')
  return (
    <div>
      page1
      <Outlet></Outlet>
    </div>
  );
}

export default Page1;
