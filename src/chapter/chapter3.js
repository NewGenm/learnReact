// react中的事件绑定
import '../App.css';
import React from "react";
let test = 123
function f2 () {
  console.log(test, this)
}
let demo = {
  abc: 'abc',
  f1: () => {
    console.log(this)
    console.log(demo.abc)
  }
}
class Chapter3 extends React.Component{
  render() {
    return <div className="App">
    <div onClick={demo.f1}>333</div>
    <div onClick={f2}>44</div>
    </div>
  }
}

export default Chapter3;
