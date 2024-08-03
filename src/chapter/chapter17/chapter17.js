// react-router
import React, { useCallback, useMemo, useState, lazy, Suspense } from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { createRouter } from "../../router/creatRouter";
import { routerArr } from "../../router/routerArr";

// 将son组件缓存化，不在必要更新时更新
function Chapter17() {

  return (
    <div>
      <div>主页</div>
      <Routes>
        {
          createRouter(routerArr)
        }
      </Routes>
    </div>
  );
}

export default Chapter17;
