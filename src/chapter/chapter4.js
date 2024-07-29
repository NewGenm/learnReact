// react中的响应式数据
import '../App.css';
import React from "react";

// class Chapter4 extends React.Component{
//   state = {
//     a: 123,
//     b: 444,
//     c: {
//       d: 555,
//       e: 6666
//     }
//   }
//   addA = () => {
//     this.setState({
//       a: this.state.a + 1,
//       c: {
//         d: 999
//       }
//     },() => {
//       // state修改是异步的
//       console.log('更新后',this.state.a)
//     })
//     console.log('更新前',this.state.a)
//   }
//   render() {
//     return <div className="App">
//       <div>{this.state.a}</div>
//       <div>{this.state.c.d}</div>
//       <div>{this.state.c.e}</div>
//       <button onClick={this.addA}>点击</button>
//     </div>
//   }
// }
class Chapter4 extends React.PureComponent{
  state = {
    a: 123,
    b: 444,
    c: {
      d: 555,
      e: 6666
    },
    arr: [1,2,3]
  }
  addA = () => {
    this.setState({
      a: this.state.a + 1,
      c: {
        d: 999
      }
    },() => {
      // state修改是异步的
      console.log('更新后',this.state.a)
    })
    console.log('更新前',this.state.a)
  }
  pushArr = () => {
    let newArr = [...this.state.arr]
    newArr.push(4)
    this.setState({
      arr: newArr
    })
  }
  render() {
    return <div className="App">
      <div>{this.state.a}</div>
      <div>{this.state.c.d}</div>
      <div>{this.state.c.e}</div>
      <div>{this.state.arr}</div>
      <button onClick={this.addA}>点击</button>
      <button onClick={this.pushArr}>数组修改</button>
    </div>
  }
}

export default Chapter4;