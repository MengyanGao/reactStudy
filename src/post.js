// 组合API
// 设置状态：setState
// 替换状态：replaceState
// 设置属性：
// 替换属性：replacePropssetProps
// 强制更新：forceUpdate
// 获取DOM节点：findDOMNode
// 判断组件挂载状态：isMounted

import './App.css';
import React from 'react';
import ReactLifePeriod from './reactLifePeriod.js';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
class ApiRelative extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0,text:'lalal' };
  }
// setState()总是会触发一次组件重绘，除非在shouldComponentUpdate()中实现了一些条件渲染逻辑。
// replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除。
  // setProps设置属性并重新渲染组件
  // props相当于组件的数据流，他总是会从父组件向子组件传递数据流，当和一个外部的js集成时，我们可能会需要向组件传递数据或通知react。render()重新渲染，可以使用setProps（）
  // 更新组件,1,在节点上再次调用React.render(),也可以通过setProps()来改变组件素性,触发组件重新渲染
  // replaceProps()和setProps()类似,但是他会删除原有的props
  // forceUpdate() 该方法会在render()方法调用之后调用,适用于this.prop和this.state之外的组件重绘,尽量避免使用
  // 获取DOM节点,findDOMNode  获取表单的值,组件已经挂载到DOM中
  // isMounted 判断组件挂载状态,返回true或false,表示组件是否已经挂载到DOM上
  // 可以使用该方法保证setState()和forceUpdate()在异常场景下的调用不会出错
  countFun(e) {
    this.setState(() => {
      return { count: this.state.count + 1 }
    }
    
    )
  }
  render() {
    return (
      <div>
        count:{this.state.count}
        text:{this.state.text}
        <ul>
          {
            posts.map((item) => {
              return <li onClick={(e) => {this.countFun(e)}} key={item.id} id={item.id}>{item.title}</li>
            })
          }
        </ul>

        <p>生命周期</p>
        <ReactLifePeriod></ReactLifePeriod>
      </div>
    )
  }
}

export default ApiRelative;

