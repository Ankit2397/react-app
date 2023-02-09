import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'increment') {
    return  state + 1

  } 
  if (action.type === 'decrement') {
    return  state - 1;
  }
  throw Error('Unknown action.');
}

const initialstate = 0;

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="context-container">
      <p>Hello! {state}</p>
      <div className="red-btn">
      <button onClick={() => {
        dispatch({ type: 'increment' })
      }}>
        Increment
      </button>
      <button onClick={() => {
        dispatch({ type: 'decrement' })
      }}>
        decrement
      </button>
      </div>

    
    </div>
  );
}
