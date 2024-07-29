// 生命周期
import '../App.css';
import React from "react";
class Chapter9 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mes: 'abc'
    }
    console.log('第一 constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('第二 derived')
    return null
  }
  shouldComponentUpdate(props, state) {
    // 优化生命周期
    console.log('先更新 shouldUpdate')
    console.log('修改前的state', this.state)
    console.log('修改后的state', state)
    // return返回false会阻止更新，返回true会正常更新
    // 如果使用component的情况下，可以在shouldComponentUpdate生命周期中进行判断，state的数据与没有进行修改来控制更新

    // 默认没有更新
    let notChange = true
    for (const item in this.state) {
      if(this.state[item] !== state.item) {
        notChange = false
      }
    }
    // 有更新返回true 没更新返回false
    return !notChange
  }
  render() {
    console.log('第三 render')
    return <div className="App">
      <button onClick={() => {
        this.setState({
          mes: 'abc'
        })
      }}>更新</button>
    </div>
  }
  componentDidMount() {
    console.log('第四 didMount')
  }
  componentDidUpdate() {
    console.log('后更新 didUpdate')
  }
}

export default Chapter9 ;