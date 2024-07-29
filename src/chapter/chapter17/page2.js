// props和组件传值和插槽
import React from "react";
import { useState, useContext } from "react";
import Page2Son from './page2Son';
import { Route, Routes, useNavigate } from "react-router-dom";
function Page2(props) {
  let nav = useNavigate()
  return (
    <div>
      page2
      <button onClick={() => {
        nav('/page4',{
          state: {
            state1: 123
          }
        })
      }}>跳转page4</button>
      <Routes>
        <Route path="/page2Son" Component={Page2Son}></Route>
      </Routes>
    </div>
  );
}

export default Page2;
