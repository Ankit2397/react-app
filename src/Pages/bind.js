import React from 'react';


function Bind(){

const person = {
    firstName:"Abc",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hee",
    lastName: "Noja",
  }
  
  let fullName = person.fullName.bind(member);
  return(
      <div>
        {fullName}
      </div>
  )
}
export default Bind;