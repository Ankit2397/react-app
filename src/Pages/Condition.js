import React from 'react';   
import ReactDOM from 'react-dom'; 

function Condition()   
{   
    return(<div>   
             
            
              <SignUp/>
              <br></br>
              <Logical/>
               
           </div>   
        );   
} 
export default Condition;

function UserLoggin(props) {  
    return <h1>Welcome back!</h1>;  
  }  
  function GuestLoggin(props) {  
    return <h1>Please sign up.</h1>;  
  }  
  function SignUp(props) {  
    const isLoggedIn = props.isLoggedIn;  
    if (isLoggedIn) {  
      return <UserLoggin />;  
    }  
    return <GuestLoggin />;  
  }  
//   ** Logical && operator **
// This operator is used for checking the condition. If the condition is true, it will return the element right after &&, and if it is false, React will ignore and skip it.

// Syntax
// {  
//     condition &&  
//     // whatever written after && will be a part of output.  
// }  

  
// Example Component   
function Logical()   
{   
    return(<div>   
            {   
                // (10 > 5) && alert('This alert will be shown!')  
            }   
           </div>   
        );   
}   


// **** Ternary operator ****
 
    // const isLoggedIn = this.state.isLoggedIn;  
    // return (  
    //   <div>  
    //     Welcome {isLoggedIn ? 'Back' : 'Please login first'}.  
    //   </div>  
    // );  
  

    //****  Switch case operator ****

    // function NotificationMsg({ text}) {  
    //     switch(text) {  
    //       case 'Hi All':  
    //         return <Message  text={text} />;  
    //       case 'Hello JavaTpoint':  
    //         return <Message text={text} />;  
    //       default:  
    //         return null;  
    //     }  
    //   }  

    // ****   Conditional Rendering with enums ****

    // function NotificationMsgg({ text, state }) {  
    //     return (  
    //       <div>  
    //         {{  
    //           info: <Message text={text} />,  
    //           warning: <Message text={text} />,  
    //         }[state]}  
    //       </div>  
    //     );  
    //   }  