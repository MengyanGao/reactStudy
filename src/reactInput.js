// react 表单与事件
// 表单有自身状态，而react把组件看成是一个状态机，通过与用户交互实现 不同状态


import './App.css';
import React from 'react';
import ReactRefs from './reactRefs.js';


class ReactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '请输入', submitValue: "肖战" };
    this.selectChange = this.selectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }
  InputChange($event) {
    this.setState({
      value: $event.target.value
    })
  }

  handleSubmit($event) {
    console.log(this.state,'state内容')
    alert("你喜欢的男明星是：" + this.state.submitValue);
    $event.preventDefault()
  }

  selectChange($event) {
    this.setState({
      submitValue: $event.target.value
    })
  }
  render() {
    return (
      <div>
        Hello
        我是表单部分
        {/* 子组件中表单数据更新 */}
        <input type="text" value={this.state.value} onChange={(e) => this.InputChange(e)}></input>
        {this.state.value}
        <br></br>
        <input type="text" value={this.props.update} onChange={this.props.handleChange}></input>
        {this.props.update}
        <br></br>
        {/* select下拉菜单 
          在react，不使用selected属性，而在根标签上用value属性来表示选项
        */}
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.submitValue} onChange={this.selectChange}>
              <option value="肖战">肖战</option>
              <option value="王一博">王一博</option>
              <option value="杨洋">杨洋</option>
            </select>
          </label>
          <input type="submit" value="提交"></input>

        </form>
        <ReactRefs></ReactRefs>
      </div>
    )
  }
}

export default ReactInput;

