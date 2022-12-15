import { useState, createContext, useContext,useReducer } from "react";
import Call from "./usecall/index.js";
import Memor from "./Memo.js";

const About = (props) =>{
  const [count, setCount] = useState(0);
  const [loggedIn,setLoggedIn]=useState(false);
  // if(!loggedIn){
  //   console.log("Profile Component")
  // }
  // else{
  //   console.log("return Component")
  
  // }
  return (
    <div>
    <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">   
    <div className="mt-5">
      <h3> {props.color} Condition Rendring run  time {count}</h3>
     <button className="m-5 bg-blue-200 py-1 px-3 text-white" onClick={() => setCount(count + 1)}>Run</button>
    </div>
     <div className="mt-4 bg-blue-200 py-1 px-3 text-white w-[60px] text-center"><button onClick={()=>setLoggedIn(!loggedIn)}>click</button></div>
    </div>
    <div>
     {loggedIn==1?
      <h2>user1</h2>
      :loggedIn==2? <h2>user3</h2>
      :<h2>user2</h2>
}
      </div>
      <div>
        <h2 className="text-center text-2xl">UserContext Hook</h2>
        <Component1/>
      </div>
      <div>
      <h2 className="text-center text-2xl">UserReducer Hook</h2>
      <Todos/>
      </div>
      <div>
      <h2 className="text-center text-2xl">CallbackHook</h2>
      <Call/>
      </div>
      <div>
      <h2 className="text-center text-2xl">UseMemoHook</h2>
      <Memor/>
      </div>

    </div>
  );
}
export default About;




// usecontext

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


// usereducer


const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };  // ...spread Operator
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
