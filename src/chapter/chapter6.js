// 表单绑定
import '../App.css';
import React from "react";
class Chapter6 extends React.PureComponent{
  state = {
    inputValue: '',
    checkbox: ['c1','c3']
  }
  choose= (e) => {
    // 未选中
    if(this.state.checkbox.indexOf(e.target.value) === -1) {
      this.setState({
        checkbox: [...this.state.checkbox, e.target.value]
      },() => {
      })
    }else {
      let newCheckbox = [...this.state.checkbox]
      newCheckbox.splice(newCheckbox.indexOf(e.target.value), 1)
      this.setState({
        checkbox: newCheckbox
      })
    }
  }

  render() {
    return <div className="App">
      <div>{this.state.inputValue}</div>
      <input onInput={(e) => {
        console.log(e.target.value)
        this.setState({inputValue: e.target.value})
      }} value={this.state.inputValue}></input>
      <input type='checkbox' name='choose' value='c1' onChange={this.choose} 
        checked={this.state.checkbox.indexOf('c1') !== -1}/>选项1
      <input type='checkbox' name='choose' value='c2' onChange={this.choose} 
        checked={this.state.checkbox.indexOf('c2') !== -1}/>选项2
      <input type='checkbox' name='choose' value='c3' onChange={this.choose}
        checked={this.state.checkbox.indexOf('c3') !== -1}/>选项3
      <div>{this.state.checkbox}</div>
    </div>
  }
}

export default Chapter6 ;