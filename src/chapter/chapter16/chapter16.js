// react-router
import React, { useCallback, useMemo, useState } from "react";
import { changeNum } from "../../store/tooikitindex";
import { useDispatch } from "react-redux";
function Chapter16(props) {
  let msg = props.store.mesReducer.msg
  let num = props.store.numReducer.num
  let dispatch = useDispatch()
  return (
    <div>
      主页
      <button onClick={() => {
        // 类组件操作修改方法
        props.store.changeMsg('test')
      }}>改变msg</button>
      <div>{msg}</div>
      <button onClick={() => {
        // props.store.changeNum(1)
        // 函数组件操作修改方法
        dispatch(changeNum(666))
      }}>改变num</button>
      <div>{num}</div>
    </div>
  );
}

export default Chapter16;
