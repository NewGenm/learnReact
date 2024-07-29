// 表达练习
import "./chapter10.css";
import React from "react";
import axios from "axios";

let selectOption = [
  {
    value: "0",
    lable: "进行中",
  },
  {
    value: "1",
    lable: "已完成",
  },
  {
    value: "2",
    lable: "已逾期",
  }
];
class Chapter10 extends React.Component {
  state = {
    listData: [],
    searchParams: {
      date: "",
      name: "",
      status: "",
    },
  };
  getList = () => {
    let params = {...this.searchParams}
    axios({
      url: "http://localhost:8000/list",
      method: "get",
      query: params,
    }).then((res) => {
      this.setState({
        listData: res.data.data,
      });
    });
  };
  resetList= (params) => {
    
  }
  componentDidMount() {
    this.getList();
  }
  showStatus = (status) => {
    let arr = [
      { text: "进行中", color: "blue" },
      { text: "已完成", color: "green" },
      { text: "已逾期", color: "red" },
    ];
    return <span style={{ color: arr[status].color }}>{arr[status].text}</span>;
  };
  setDate = (e) => {
    console.log(e);
    console.log(e.target.value);
    let data = e.target.value;
    this.setState(
      {
        searchParams: {
          ...this.state.searchParams,
          date: data,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  setName = (e) => {
    let name = e.target.value;
    this.setState({
      searchParams: {
        ...this.state.searchParams,
        name: name,
      },
    });
  };
  selectStatus = (e) => {
    let status = e.target.value;
    this.setState({
      searchParams: {
        ...this.state.searchParams,
        status: status,
      },
    });
  }
  render() {
    return (
      <div>
        <span>日期</span>
        <input
          value={this.state.date}
          onInput={this.setDate.bind(this)}
        ></input>
        <span>订单名</span>
        <input value={this.state.name}></input>
        <span>筛选状态</span>
        <select onChange={this.selectStatus}>
            {
                selectOption.map((item) => {
                    return <option value={item.value} key={item.value}>{item.lable}</option>
                })
            }
        </select>
        <button onClick={this.getList}>查询</button>
        <button onClick={this.resetList}>重置</button>
        <table>
          <thead>
            <tr>
              <td>日期</td>
              <td>订单名</td>
              <td>订单状态</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            {this.state.listData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{this.showStatus(item.status)}</td>
                  <td>
                    <button>删除</button>
                    <button>修改</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Chapter10;
