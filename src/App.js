import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import HeaderInput from './components/HeaderInput';
import Todolists from './components/Todolists';
function App() {
  const [ todoState, setTodoState ] = useState({
      todoLists: [
        {id:1, text: "할일1"},
        {id:2, text: "할일2"},
      ],
      inputText : ""
    });
  const [ id, setId ] = useState(3);
  const onChange = (e) => {
      setTodoState({
        ...todoState,
        inputText: e.target.value
      });
  }
  const onAddTodo = () => {
    const newTodoLists = [
        ...todoState.todoLists,
        { id: id, text: todoState.inputText}
    ]
    setTodoState({
      todoLists:newTodoLists,
      inputText: ""
    })
    setId(id+1);
    console.log(todoState.todoLists);
}
const delTodoLists = (id) => {
  const newTodoLists = todoState.todoLists.filter(todo=> todo.id !== id);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  });
 }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div className="App todo">
      <HeaderInput 
      inputText={todoState.inputText} 
      onChange={onChange} 
      onAddTodo={onAddTodo}/>
      <Todolists todoLists={todoState.todoLists} 
      delTodoLists={delTodoLists} />
    </div>
    </div>
  );
}

export default App;