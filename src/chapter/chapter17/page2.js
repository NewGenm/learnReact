// props和组件传值和插槽
import React from "react";
import { Outlet } from "react-router-dom";
function Page2(props) {
  return (
    <div>
      page2
      <div><Outlet></Outlet></div>
    </div>
  );
}

export default Page2;
