// react-router
import React, { useCallback, useMemo, useState, lazy, Suspense } from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
// import Page4 from "./page4";
import Page1Son from "./page1Son";
let LazyPage4 = lazy(() => {
  return import("./page4");
});
// 将son组件缓存化，不在必要更新时更新
function Chapter15() {
  let [id, setID] = useState("123");
  return (
    <div>
      <div>这是主页</div>
      {/* 在page3的情况下，修改id会引起page3的更新 */}
      <button
        onClick={() => {
          setID(id++);
        }}
      >
        修改id
      </button>
      <div>
        {/* NavLink 提供跳转的标签，当前路径有active类 Link没有active类 */}
        <NavLink to="/page1">去page1</NavLink>
        <NavLink to="/page2">去page2</NavLink>
        <NavLink to={"/page3/" + id}>去page3</NavLink>
        <NavLink to="/page4">去page4</NavLink>
      </div>
      <Suspense fallback={<h1>加载中</h1>}>
        <Routes>
          {/* path 路径 element/component 配置需要路由的组件 */}
          <Route path="/page1" element={<Page1></Page1>}>
            <Route path="page1Son" Component={Page1Son}></Route>
          </Route>
          <Route path="/page2" Component={Page2}></Route>
          <Route path="/page3/:id" Component={Page3}></Route>
          <Route path="/page4" Component={LazyPage4}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default Chapter15;
