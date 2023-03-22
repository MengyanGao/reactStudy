// 组件生命周期
// 主要分三个
// 1，Mounting(挂载)，已插入真实Dom
// 2，Updating（更新），正在被重新渲染
// 3，Unmounting（卸载），已移除真实DOM

// 挂载Mounting
// 当组件实例被创建并插入到dom中时，生命周期顺序
// 1，constructor():挂载之前调用构造函数
// 2，getDerivedStateFromProps():render()方法调用之前调用，并且在初始挂载和后续更新都会被调用
// 3，render（）是class组件中唯一必须实现的 方法
// componentDidMount（）在组件挂载之后插入到dom树中立即调用

// 更新Updating
// 每当组件里的state及props发生变化时就会更新
// 1，getDerivedStateFromProps（）render（）之前调用，根据shouldComponentUpdate（）返回值，判断react组件输出是否受当前state或props影响
// shouldComponentUpdate（）当props或者state发生变化时，会在发生变化之前调用
// render（）
// getSnapShotBeforeUpdate（）在最后一次渲染输出（提交到DOM节点）之前调用
// componentDidUpdate（）在更新后会立即调用

// 卸载Unmouting（）
// 组件从dom中移除会调用
// componentWillUnmount（）在组件 卸载及销毁之前直接调用

import './App.css';
import React from 'react';
import ReactAjax from './reactAjax.js'


class ReactLifePeriod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {opacity: 1, count: 1}
  }

  // componentWillReceiveProps(newProps) {
  //   console.log("组件接受prop之前调用")
  // }

  // shouldComponentUpdate(newProps, newState) {
  //   return true
  // }

  // componentWillUpdate(newProps,nextState) {
  //   console.log("组件更新数组之前调用")
  // }

  // componentDidUpdate(preprops, prevState) {
  //   console.log("组件更新完成之后调用")
  // }

  // componentWillUnmount() {
  //   console.log("组件卸载之前调用")
  // }
  // componentDidMount() {
  //   console.log("组件挂载完成之后调用")
  //   // this.timer = setInterval(() => {
  //   //   let opacity = this.state.opacity;
  //   //   opacity -= 0.05;
  //   //   if (opacity < 0.1) {
  //   //     opacity = 1.0
  //   //   }

  //   //   this.setState({
  //   //     opacity: opacity
  //   //   })
  //   // }, 100)
  // }
  tick() {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div>
        Hello
        <div style={{ opacity: this.state.opacity }}>hello world</div>
        {this.state.count}
        <button onClick={() => this.tick()}>点我啊</button>
        <ReactAjax source="http://api.github.com/users/octocat/gists"></ReactAjax>
      </div>
    )
  }
}

export default ReactLifePeriod;

