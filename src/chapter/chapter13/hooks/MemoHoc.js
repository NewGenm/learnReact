import React from 'react';
export default function MemoHoc (Com) {
    return class extends React.Component{
        shouldComponentUpdate(props, state) {
            console.log(props, state)
            let shouldUpdate = false
            // 如果props没有修改，不做更新
            for (const item in props) {
                if(this.props[item] !== props[item]) {
                    shouldUpdate = true
                    return
                }
            }
            // 如果state没有修改，不做更新
            for (const item in props) {
                if(this.state[item] !== state[item]) {
                    shouldUpdate = true
                    return
                }
            }
            return shouldUpdate
        }       
        render() {
            return <>
                <Com {...this.props}></Com>
            </>
        }
    }
}