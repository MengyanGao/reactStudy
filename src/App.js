import './App.css';
import React from 'react';
import Keysa from './keys.js';

const name = "高梦";
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
class App extends React.Component {
  
  render() {
    return (
      <div>
        <Keysa  data={name} posts={posts}></Keysa>,
        lalalhello World
      </div>
    )
  }
}

export default App;
