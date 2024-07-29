// props和组件传值和插槽
import "../../App.css";
import Grandson from "./grandson";
import React from "react";
import { Context1 } from './chapter11';
class Son extends React.PureComponent {
  state = {
    name: '作用域插槽',
    title: '这是子'
  };

  testFn = () => {
    console.log('我是儿子')
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div>我是儿子</div>
        <Context1.Consumer>
          {
            (value) => {
              console.log(value)
              return <>
                <div>123{value.message}</div>
                <div>456{value.other}</div>
              </>
            }
          }
        </Context1.Consumer>
        <Grandson></Grandson>
      </div>
    );
  } 
}
export default Son;
