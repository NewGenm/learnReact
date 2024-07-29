// props和组件传值和插槽
import "../../App.css";
import React from "react";
import Son from "./son";
export let Context1 = React.createContext()
class Chapter11 extends React.PureComponent {
  state = {
    title: "这是父",
    message: '父传递值',
    other: '其他值'
  };
  normal = React.createRef();
  sonDom = React.createRef();
  componentDidMount() {
    let div = this.normal.current
    let son = this.sonDom.current
    son.testFn()
  }
  render() {
    return (
      <div className="App">
        <div ref={this.normal}>普通标签</div>
        <Context1.Provider value={this.state}>
          <Son ref={this.sonDom}></Son>
        </Context1.Provider>
      </div>
    );
  }
}
export default Chapter11;
