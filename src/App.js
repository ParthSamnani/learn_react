import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind></EventBind>
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Counter/> */}
      {/* <Greet name = "Bruce" heroName = "Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
        </Greet> */}
      {/* <Greet name = "Diana" heroName = "Wonder woman" /> */}
      {/* <Welcome name = "Bruce" heroName = "Batman"/> */}
      {/* <Welcome name = "Clark" heroName = "Superman"/> */}
      {/* <Welcome name = "Diana" heroName = "Wonder woman"/> */}
      {/* <Message></Message> */}
    </div>
  );
}     

export default App;
