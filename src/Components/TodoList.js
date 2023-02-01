import React from "react";
import '../App.css';
import Todo from "./Todo.js"

const TodoList =({todos , setTodos}) =>{
    return(
 <>
 <div className="todo-container">
     <ul className="todo-list"> </ul>
     {todos.map((todo) => (
  <Todo  todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id}/>
     ))}
 </div>

</>
    );
}
export default TodoList;