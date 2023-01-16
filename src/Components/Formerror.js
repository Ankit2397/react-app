import { useState } from 'react'
export default function Form() {
  const [inputVal, updateVal] = useState('')
  const [isError, initError] = useState(null)
  const [isValid, initValid] = useState(null)
  // var regexp1 = new RegExp("?![a-zA-Z]+$");
  function initChange(event) {
    const { value } = event.target
    updateVal(value)
    const isLowercase = value === value.toLowerCase()
    if (isLowercase) {
      initValid(value.length ? `${value} is valid lowercase` : null)
      initError(null)
    } else {
      initError('Product name should be lowercase')
      initValid(null)
    }
  }
  function initSubmit(event) {
    event.preventDefault()
    window.alert(`${inputVal} is valid lowercase value`)
  }

  return (
    <div className="container w-[500px]">
      <h2 className="mb-4">Lowercase Text Input</h2>
      <form onSubmit={initSubmit}>
        <div>
          <label className="mb-2">
            <strong>Product: </strong>
          </label>
          <input
            id="userInput"
            value={inputVal}
            className="form-control w-[500px]"
            onChange={initChange}
          />
        </div>
     
        {isError && (
          <div className="alert alert-danger mt-3 w-[500px]" role="alert">
            {isError}
          </div>
        )}
        {isValid && (
          <div className="alert alert-success mt-3 w-[500px]" role="alert">
            {isValid}
          </div>
        )}
           <div className="d-grid mt-3 w-[500px]">
          <button
            className="btn bg-danger my-0 mx-auto w-[200px]"
            disabled={Boolean(isError) || inputVal.length < 1}
            type="submit"
          >
            Add
          </button>
         
        </div>
      </form>
    </div>
  )
}