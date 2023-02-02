import logo from './logo.svg';
import React from "react";
import './App.css';
import axios from 'axios';
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import { useState ,useEffect } from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/todos/1";

function App() {
  const [post, setPost] = useState(null);
 const [inputText , setInputText]=useState("")
 const [todos , setTodos]=useState([])
 const [status , setStatus]=useState('All');
 const [filteredTodos , setFilteredTodos]=useState([]);


useEffect(() => {
  filterHandler()
}, [todos , status]);

const filterHandler =() =>{
  switch(status) {
  case 'completed' :
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted' :
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default :
          setFilteredTodos(todos)
          break;
  }
}


 useEffect(() => {
  axios.get(baseURL).then((response) => {
    setPost(response.data);

  console.log(response.data)
  });
}, []);

if (!post) return null;


const saveLocalTodos = () =>{
  if(localStorage.getItem('todos') == null)
  localStorage.setItem('todos' , JSON.stringify([]));

else {
  localStorage.setItem('todos' , JSON.stringify([]));
}
}


  return (
    <div className="App">
<h2>Todo List</h2>
      <Form
     
       inputText={inputText} todos={todos}
       setStatus={setStatus}
       setTodos={setTodos} setInputText={setInputText}/>
      <TodoList  
        filteredTodos ={filteredTodos}
      setTodos={setTodos} todos={todos}/>
      <h3>{post.id}</h3>
      <h2>{post.title}</h2>
      {/* {
        post.map((curElem)=>{
          <div>
          <h3>{curElem.id}</h3>
          <h2>{curElem.title}</h2>
          </div>
        })
      } */}
    </div>
  );
}

export default App;
