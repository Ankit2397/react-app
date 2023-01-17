import React, { Component } from 'react';
export default class JSXComponent extends Component {
    render() {
        let user = true;
        let isAdmin = true;
        let result;
        if (user && isAdmin) {
            result = 'Conditrion is truthy';
        }
        return (
            <div className="row">
                {
                    result
                }
            </div>
        );
    }
}

// import React, { Component } from 'react';
// export default class JSXComponent extends Component {
//     render() {
//         let user = false;
//         let isAdmin = true;
//         let result;
//         if (user || isAdmin) {
//             result = 'Conditrion is truthy';
//         } else {
//             result = 'Conditrion is false';
//         }
//         return (
//             <div className="row">
//                 {
//                     result
//                 }
//             </div>
//         );
//     }
// }
// React Logical And && Operator 
// // And && operator output
// true  && true;  // true
// true  && false; // false
// false && true;  // false
// false && false; // false