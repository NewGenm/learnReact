// react组件和jsx
import '../App.css';
import React from "react";

function Chapter2() {
  // 新版本写法
  function FnHello() {
    return <div>hello</div>
  }
  // 使用React.createElement方法的写法
  function FnHelloByCE() {
    return React.createElement('div',[],'hello3')
  }
  // 旧版本写法
  class ClassHello extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return <div>hello2</div>
    }
  }
  let obj = FnHello()
  let obj2 = {a: 1}
  let dom1 = <FnHello />
  let string = '123'
  let array = [4, 5, obj]
  let expression = 123 > 100 ? dom1 : '123'
  let fn = function(){return 123}
  let boo = true
  let un = undefined
  let nu = null
  return (
    <div className="App">
      <FnHello></FnHello>
      <ClassHello></ClassHello>
      <FnHelloByCE></FnHelloByCE>
      {obj}
      {obj2}
      {dom1}
      {string}
      {array}
      {expression}
      {fn}
      {boo}
      {un}
      {nu}
    </div>
  );
}

export default Chapter2;
