import React from "react";
export default function TestHoc(Com) {
  return class extends React.PureComponent {
    state = {
        a: 123
    }
    f1 = () => {
        console.log(1)
    }
    render() {
        console.log('你是props', this.props)
        return <div>
            <Com a={this.state.a} f1={this.f1} {...this.props}></Com>
        </div>
    }
  };
}
