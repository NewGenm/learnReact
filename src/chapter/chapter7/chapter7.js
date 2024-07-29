// props和组件传值和插槽
import "../../App.css";
import React from "react";
import Son from "./son";
class Chapter7 extends React.PureComponent {
  state = {
   title: '这是父' 
  }
  changeTitle = (sonTitle) => {
    console.log(this)
    this.setState({
      title: sonTitle
    })
  }
  render() {
    return (
      <div className="App">
        <div>看看标题：{this.state.title}</div>
        <Son
          a={"123"}
          b={456}
          nameSlot={<div>具名插槽</div>}
          scopeSlot={(slot) => {
            return <div>{slot.name}</div>;
          }}
          sonTitle={this.changeTitle}
        >
          <div>普通插槽</div>
        </Son>
      </div>
    );
  }
}
export default Chapter7;
