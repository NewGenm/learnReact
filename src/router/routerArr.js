import Page1 from "../chapter/chapter17/page1";
import Page2 from "../chapter/chapter17/page2";
import Page3 from "../chapter/chapter17/page3";
import Page4 from "../chapter/chapter17/page4";
import page2Son from '../chapter/chapter17/page2Son';
import page2Son2 from '../chapter/chapter17/page2Son2';

export const routerArr = [
    {
        path:'/page1',
        component: Page1
    },
    {
        path:'/page2',
        component: Page2,
        children: [
            {
                path:'Son',
                component: page2Son,
            },
            {
                path:'Son2',
                component: page2Son2,
            }
        ]
    },
    {
        path:'/page3',
        component: Page3
    },
    {
        path:'/page4',
        component: Page4
    }
]