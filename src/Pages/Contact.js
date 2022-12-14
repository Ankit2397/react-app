import React, { Component } from 'react';  
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
         <h2 className="text-2xl text-center my-2">React key</h2>  
         <MenuBlog data={data} />
         </div>
        

            </div>
            </div>
        );  
    }  
}  
export default Contact;


  function MenuBlog(props) {  

// list loop
    const titlebar = (  
      <ol>  
        {props.data.map((show) =>  
          <li key={show.id}>  
            {show.title} 
        </li>  
        )}  
      </ol>  
    );  


    const content = props.data.map((show) =>  
      <div key={show.id}>  
        <h3>{show.title}: {show.content}</h3>      
      </div>  
    );  


    return (  
      <div>  
        {titlebar}  
        <hr />  
        {content}  
      </div>  
    );  
  }  

//   Data use As a Api
  const data = [  
    {id: 1, title: 'First', content: 'Welcome !!'},  
    {id: 2, title: 'Second', content: 'It is the best ReactJS!!'},  
    {id: 3, title: 'Third', content: 'Here, you can learn all the ReactJS!!'}  
  ];  
 
  