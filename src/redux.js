import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Slice/index'

export default function Redux() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return(
    <div>
      <div className="redux-contain">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="redux-btn"
        >
          Increment
        </button>
        <span className="redux-input">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="redux-btn"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}