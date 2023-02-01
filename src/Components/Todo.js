import React from "react";
import '../App.css';

const Todo =({text ,todo, setTodos,todos }) =>{
    const deleteHandler =()=>{
 setTodos(todos.filter((el)=> el.id !==todo.id))
    };
    const completeHandler =()=>{

        setTodos(todos.map((item)=>{
  if(item.id === todo.id){
      return{
          ...item , completed:!item.completed
      }
  }
  return item;
        })
         ) }
    return(
 <>
 <div className="todo">
     <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
     <div>
         <button onClick={completeHandler} className="complete-btn"><i className="fa fa-check" ></i> </button>
         <button onClick={deleteHandler} className="trash-btn"> <i className="fa fa-trash" ></i>
         </button>
         </div>
 </div>

</>
    );
}
export default Todo;