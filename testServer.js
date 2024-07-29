const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let userArr = ["张三", "李四", "王五", "马六"];
let arr = [];
for (let i = 0; i < Math.floor(Math.random() * 100, 2) + 100; i++) {
  arr.push({
    id: "0000" + i,
    date: "2024-07-" + Math.floor(Math.random() * 30 + 1),
    no: "AC000" + Math.floor(Math.random() * 9999),
    name: "订单" + i,
    status: Math.floor(Math.random() * 3),
    user: userArr[Math.floor(Math.random() * 4)],
    price: Math.floor(Math.random() * 9999),
  });
}
app.get('/list', (req, res) => {
    let page = req.query.page || 1
    let pageSize = req.query.pageSize || 10
    let user = req.query.user || undefined
    let date = req.query.date || undefined
    let no = req.query.no || undefined
    let status = req.query.status || undefined
    let _finnalArr = [...arr]
    if(user) {
        _finnalArr = _finnalArr.filter((item) => {
            return item.user === user
        })
    }
    if(date) {
        _finnalArr = _finnalArr.filter((item) => { 
            return item.date === date
        })
    }
    if(no) {
        _finnalArr = _finnalArr.filter((item) => {
            return item.no === no
        })
    }
    if(status) {
        _finnalArr = _finnalArr.filter((item) => {
            return item.status === status
        })
    }
    let _start = (page - 1) * pageSize
    let _end = _start + (pageSize - 0)
    res.json({
        code: 200,
        mess: '成功',
        data: _finnalArr.slice(_start, _end),
        total: _finnalArr.length
    })
})
app.listen(8000)