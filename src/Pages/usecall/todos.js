import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button className="bg-blue-200 py-2 px-3 w[160px] text-center ml-4 my-6 rounded-[5px]" onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);