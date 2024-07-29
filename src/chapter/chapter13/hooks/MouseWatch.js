import React from "react";
export default function MouseWatch(Com) {
  return class extends React.PureComponent {
    state = {
        x: '',
        y: ''
    }
    componentDidMount() {
        window.addEventListener('mousemove', (e) => {
            this.setState({
                x: e.clientX, 
                y: e.clientY, 
            })
        })
    }
    render() {
        return <div>
            <Com coordinate={{...this.state}} {...this.props}></Com>
        </div>
    }
  };
}
