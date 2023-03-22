// react AJAX
// react组件的数据可以通过 componentDidMount方法中的ajax来获取，
// 当从复渠段获取数据时可以将数据存在state中，再用this.setSate方法来重新渲染UI组件
// 当使用异步加载数据时，在组件卸载钱使用componentWillUnmount来取消未完成的请求
import './App.css';
import React from 'react';
import $ from "jquery"
import ReactInput from "./reactInput.js"


class ReactAjax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', lasturl: '', update: '请输入' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.service = $.get(this.props.source, (result) => {
      var obj = result[0];
      console.log(obj,'obj===')
      this.setState({
        username: obj.owner.login,
        lasturl: obj.owner.html_url,
      })
    })
  }

  handleChange($event) {
    this.setState({
      update: $event.target.value
    })
  }


  render() {
    return (
      <div>
        Hello
        我是ajax部分
        {this.state.username}
        <a href={this.state.lasturl}>{this.state.lasturl}</a>
        {/* 表单数据从父组件传入 */}
        <ReactInput update={this.state.update}   handleChange={this.handleChange}></ReactInput>
      </div>
    )
  }
}

export default ReactAjax;

