import React, { Component } from 'react';  
class Contact extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            companyName: ''  
        };  
    }  
    changeText(event) {  
        this.setState({  
            companyName: event.target.value  
        });  
    }  
    render() {  
        return (  
            <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">   
            <div className="mt-5 ml-2">  
                <h2 className="text-2xl text-center">Contact</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" className="border-2 text-gray-400 border-gray-400 focus:outline-[#FE4A2A] rounded-[5px]" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4 className="mt-2">You entered: <span className="text-[#FE4A2A]">{ this.state.companyName }</span></h4>  
            </div>  
            </div>
        );  
    }  
}  
export default Contact;