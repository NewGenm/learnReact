// props和组件传值和插槽
import "../../App.css";
import React from "react";
import Chapter8CSS from './Chapter8CSS.module.css';
import classnames from "classnames/bind";

let newClassnames = classnames.bind(Chapter8CSS)
class Chapter8 extends React.PureComponent {
  state = {
    showBackground: true,
  }
  render() {
    console.log(this.state.classList)
    const classList = newClassnames({
      font: true,
      background: this.state.showBackground
    })
    return (
      <div className="App">
        <div 
          className={(this.state.showBackground ? Chapter8CSS.background : '' ) + ' ' + Chapter8CSS.font}
          style={{
            color: "red"
          }}
        >123</div>
        <div 
          className={classList}
          style={{
            color: "red"
          }}
        >555</div>
        <button onClick={() => {
          this.setState({
            showBackground: true
          })
        }}>添加背景</button>
        <button onClick={() => {
          this.setState({
            showBackground: false
          })
        }}>移除背景</button>
      </div>
    );
  }
}
export default Chapter8;
 