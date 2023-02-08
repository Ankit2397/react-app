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

// useReducer(reducer,initialstate)
// ***** Switch case *****

// function reducer(state, action) {
//     switch (action.type) {
//       case 'increment': {
//         return {
//           name: state.name,
//           initialstate: state.initialstate + 1
//         };
//       }
//       case 'changed_name': {
//         return {
//           name: action.nextName,
//           initialstate: state.initialstate
//         };
//       }
//     }
//     throw Error('Unknown action: ' + action.type);
//   }
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
