import React, { Component } from 'react';  
import News from "./News.js";


class Contact extends React.Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            companyName: ''  
        };  
        console.warn("constructor")
    } 
    changeText(event) {  
        this.setState({  
            companyName: event.target.value  
        });  
       
    }  
    componentDidMount(){
      console.warn("componentDidmount")
    }
    render() { 
      console.warn("render")
        return (  
            <div>
            <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">  
            <div className="mt-5 ml-2">  
                <h2 className="text-2xl text-center my-2">Component LifeCycle</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" className="border-2 text-gray-400 border-gray-400 focus:outline-[#FE4A2A] rounded-[5px]" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4 className="mt-2">You entered: <span className="text-[#FE4A2A]">{ this.state.companyName }</span></h4>  
            </div> 

<div>
    <News/>
</div>

            </div>
            </div>
        );  
    }  
}  
export default Contact;

