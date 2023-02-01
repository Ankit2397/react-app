import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { useState } from 'react';

function App() {
 const [inputText , setInputText]=useState("")
 const [todos , setTodos]=useState([])
  return (
    <div className="App">
<h2>Todo List</h2>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList  setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
