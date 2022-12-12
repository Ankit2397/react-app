import React from 'react';

function Cats() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
     <h3>OnChange</h3>
    <input
     className="border-2 border-red-100 m-5"
      type="text"
      name="firstName"
      onChange={handleChange}
    />
    </div>

  );
}
export default Cats;