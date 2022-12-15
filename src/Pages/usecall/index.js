import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./todos";

const Call = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div className="bg-blue-200 py-2 px-3 my-4 text-center ml-5 w-[160px]">
        Count: {count} 
        <button className="ml-4 text-3xl rounded-[5px]" onClick={increment}>+</button>
      </div>
    </>
  );
};
export default Call;
