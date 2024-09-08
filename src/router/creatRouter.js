import { Route } from "react-router-dom";
export const createRouter = (routerArr) => {
  return routerArr.map((item) => {
    console.log(item)
    if (item.children && item.children.length > 0) {
      return (
        <Route path={item.path} Component={item.component} key={item.path}>
          {createRouter(item.children)}
        </Route>
      );
    } else {
      return (
        <Route
          path={item.path}
          Component={item.component}
          key={item.path}
        ></Route>
      );
    }
  });
};
