// props和组件传值和插槽
import "../../App.css";
import React from "react";
import { Context1 } from './chapter11';
class grandson extends React.PureComponent {
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
        <div>我是孙子</div>
        <Context1.Consumer>
          {
            (value) => {
              console.log(value)
              return <>
                <div>{value.message}</div>
                <div>{value.other}</div>
              </>
            }
          }
        </Context1.Consumer>
      </div>
    );
  } 
}
export default grandson;
