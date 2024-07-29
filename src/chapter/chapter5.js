// 条件渲染和列表循环
import '../App.css';
import React from "react";
class Chapter5 extends React.PureComponent{
  state = {
    isShow: true,
    arr: [1,2,3]
  }
  // 通过状态控制显隐
  changeShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  // 使用方法判断显隐
  show = () => {
    return this.state.isShow ? <div>123</div> : <div>456</div>
  }
  
  pushArr = () => {
    let newArr = [...this.state.arr]
    newArr.push(Math.random() * 10)
    this.setState({
      arr: newArr
    })
  }
  render() {
    return <div className="App">
      <div>{this.state.isShow ? <div>展示</div> : ''}</div>
      <div>{this.show()}</div>
      <div>{this.state.arr.map((item) => {
        return <div key={item}>{item}</div>
      })}</div>
      <button onClick={this.changeShow}>点击</button>
      <button onClick={this.pushArr}>数组修改</button>
    </div>
  }
}

export default Chapter5;