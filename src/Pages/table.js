import React from 'react';  
    
function Table() {  
    
 const students = [  
              {  
                'id': 1,   
                'name': 'Jack',   
                'email': 'jack@gmail.com'  
              },  
              {  
                'id': 2,   
                'name': 'Mary',   
                'email': 'mary@gmail.com'  
              },
              {  
                'id': 3,   
                'name': 'John',   
                'email': 'john@gmail.com'  
              },  
          ];

  return (  
    <div className="container ml-8 my-4 border-black border-2 w-[220px] px-2">  
        <h1> Example of React Map Loop </h1>  
     
        <table className="table table-bordered border-2 border-black mx-auto mb-4 mt-2">  
            <tr className="">  
                <th>ID</th>  
                <th>Name</th>  
                <th>Email</th>  
            </tr>  
    
            {students.map((student, index) => (  
              <tr data-index={index}>  
                <td>{student.id}</td>  
                <td>{student.name}</td>  
                <td>{student.email}</td>  
              </tr>  
            ))}  
    
        </table>  
    
    </div>  
  );  
}  
    
export default Table;  