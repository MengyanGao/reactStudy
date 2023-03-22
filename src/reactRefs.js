// react refs
// 特殊属性refs，用来绑定到render()输出的任何组件上
// 可以通过使用this来获取当前react组件，或者使用red来获取组件的引用


import './App.css';
import React from 'react';


class ReactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '请输入', submitValue: "肖战" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log(this, 'this');
    alert(this.state.value)
    this.refs.myInput.focus()
  }
  handleChange($event) {
    this.setState({
      value: $event.target.value
    })
  }


  render() {
    return (
      <div>
        Hello
        我是refs
        <input type="text" ref="myInput" value={this.state.value} onChange={this.handleChange}></input>
        {this.state.value}
        <input type="button" onClick={this.handleSubmit} value="提交"></input>
      </div>
    )
  }
}

export default ReactInput;

