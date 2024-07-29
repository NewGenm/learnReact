// props和组件传值和插槽
import "../../App.css";
import React from "react";
import proptypes from "proptypes";
class Son extends React.PureComponent {
  state = {
    name: '作用域插槽',
    title: '这是子'
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div>我是儿子</div>
        <div>{this.props.a}</div>
        <div>{this.props.children}</div>
        <div>{this.props.nameSlot}</div>
        <div>{this.props.scopeSlot(this.state)}</div>
        <button onClick={() => {
            this.props.sonTitle(this.state.title)
        }}>修改</button>
      </div>
    );
  } 
}
// 定义子组件类型验证
Son.propTypes = {
  // a: function (props) {
  //   if(typeof props.a !== 'string') {
  //     throw new Error('a must be a string')
  //   }
  // }
  a: proptypes.string,
};
Son.defaultProps = {
  a: "这是默认值",
};
export default Son;
