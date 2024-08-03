import {Route} from 'react-router-dom'
export const createRouter = (routerArr) => {
    return routerArr.map((item) => {
        return <Route path={item.path} Component={item.component} key={item.path}></Route>
    })
}