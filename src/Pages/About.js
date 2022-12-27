import { useState, createContext, useContext,useReducer ,useId ,Suspense ,  useDeferredValue} from "react";
import { useSyncExternalStore, useDebugValue } from 'react';
import { useEffect, useRef } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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
      <div className="my-2">
        <Allaccordian/>
      </div>
      <div>
        <h2 className="text-center text-2xl">UserContext Hook</h2>
        <Component1/>
        <Button variant="primary">Primary</Button>{' '}
      </div>
      <div>
      <h2 className="text-center text-2xl">UserReducer Hook</h2>
      <Todos/>
      </div>
      <div>
      <h2 className="text-center text-2xl">UseRefHook</h2>
      <Ref/>
      </div>
      <div>
      <h2 className="text-center text-2xl">useSyncExternalStoreHook <br className="my-2"></br>useDebugValue Hook </h2>
      <StatusBar/>
      </div>
      <div>
      <h2 className="text-center text-2xl">UseIdHook</h2>
        <Checkbox/>
      </div>

    </div>
  );
}
export default About;



function Allaccordian() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}



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


// useRef

function Ref() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
    <div className="my-0 mx-6">
      <input
        className="border-2 border-blue-200 my-2"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      </div>
    </>
  );
}

// useSyncExternalStore is a hook recommended for reading and subscribing from external data sources in a way that’s compatible with concurrent rendering features like selective hydration and time slicing

// useDebugValue => can be used to display a label for custom hooks in React DevTools.

// useSyncExternalStore ||  useDebugValue 
function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? 'Online' : 'Disconnected'}</h1>;
}

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true);
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}



//useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.
//useId is not for generating keys in a list. Keys should be generated from your data.

function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like it?</label>
      <input id={id} type="checkbox" name="react"/>
    </>
  );
};



// useImperativeHandle => usually hook expose your functional based component method and properties to other component by putting functional component inside forwardRef example
// useImperativeHandle should be used with forwardRef

// useInsertionEffect should be limited to css-in-js library authors. Prefer useEffect or useLayoutEffect instead.


// useTransition is a React Hook that lets you update the state without blocking the UI.

// const [isPending, startTransition] = useTransition()

// useDeferredValue is a React Hook that lets you defer updating a part of the UI.

// const deferredValue = useDeferredValue(value)