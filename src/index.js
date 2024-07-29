import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from './store/index';
// 封装好的切片store仓库
import store from "./store/tooikitindex";


// ReactDOM的作用是吧一个react组件渲染到DOM上或者从DOM上卸载
// 指定id为root的标签渲染app组件
// 类似于vue的app标签
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 全局绑定store */}
    <Provider store={store}>
      {/* 使用history模式的路由，如果直接包裹app标签，则全体组件都有路由 */}
      <BrowserRouter>
        {/* <App /> */}
        <App3></App3>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// setTimeout(() => {
//   root.unmount() // 卸载root组件
// }, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
