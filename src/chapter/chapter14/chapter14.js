// react优化
import React, { useCallback, useMemo, useState } from "react";
import Son from "./son";
// 将son组件缓存化，不在必要更新时更新
let MemoSon = React.memo(Son)
function Chapter14() {
  let [num, setNum] = useState(1);
  // 不使用useMemo将会导致子组件更新
  // let obj = {
  //   a: 1
  // }
  let obj = useMemo(() => {
    return {
      a: 1,
    };
  }, []);
  // 不使用useCallback将会导致子组件更新
  // let f1 = function () {
  //   console.log(123)
  // }
  let f1 = useCallback(function() {
    console.log(123)
  }, [])
  return (
    <div>
      {num}
      <button
        onClick={() => {
          setNum(++num);
        }}
      >
        点击
      </button>
      <MemoSon obj={obj} f1={f1}></MemoSon>
    </div>
  );
}

export default Chapter14;
