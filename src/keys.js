import './App.css';
import React from 'react';
import ApiRelative from './post.js'

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
class Keysa extends React.Component {

  navigative(e) {
    console.log(e,'1212')
   
  }
  render() {
    return (
      <div>
        name:{this.props.data}
        <ul>
          {
            // key会最为react的提示，但不会传给组件，如果你的组件里想使用key值，需要 id={item.id}
            // 在下面的例子中组件内会读取到id，但读取不到key
            posts.map((item) => {
              return <li  onClick={(e) => this.navigative(e)} key={item.id} id={item.id}>{item.title}</li>
            })
          }
        </ul>
        <ApiRelative></ApiRelative>
      </div>
    )
  }
}

export default Keysa;

