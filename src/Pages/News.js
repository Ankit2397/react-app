import React, { Component } from "react";
import Newsitems from "../Components/Newsitems.js";

class News extends Component{
   constructor(){
       super();
       console.log("Hello i am a Contructor from Newsitems")
       this.state ={
           articles : []
       }
   }
   async componentDidMount(){
       console.log("Cmd")
       let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=ccd9cf36048a4082b7fd3d85e644f863"
       let data = await fetch(url);
       let parsedData = await data.json();
       console.log(parsedData)
       this.setState(parsedData);
   }
   
    render(){
        console.log("render")


        return(
            <div>
                <div className="main-container">
                    <div className="wrapper">
                        <div className="my-2 flex">
                            <div className="flex flex-wrap justify-between h-full">
                                 { this.state.articles.map((element)=> {   
                                   return(
                                       <div className="w-1/3 h-full my-2" key={element.url}>
                                           <Newsitems
                                           title={element.title}
                                           description={
                                               element.description
                                            ? element.description.slice(0,88) : ""
                                            }
                                           newsurl={element.url}
                                           imageUrl={element.urlToImage}
                                           />

                                           </div>
                                   );      
                                 })
                                }
                            </div>


                        </div>

                    </div>


                </div>
            </div>

   
            )
    }
    
}
export default News;