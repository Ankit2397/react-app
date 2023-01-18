import React from 'react';
import jsPDF from 'jspdf'
import axios from 'axios';

class PDF extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={
            Pdf:""
        }
    };

  
    generatePDF = () => {
        axios.get('https://dummyjson.com/products')
        .then(function (response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        //   let data=JSON.parse(response.data)
        //   console.log(data)
        });
      var doc = new jsPDF('p', 'pt');
    //   doc.text(20, 20,[this.Pdf()])
      doc.addFont('helvetica', 'normal')
      doc.text(20, 60, 'This is the second titlegfdcxdgcgvg.')
      doc.text(20, 100, 'This is the thrid titlebmgkvbjvkckcjjjjjjjjjjjjjjjjjjjjvb.')      
      
      doc.save('demo.pdf')
    
           
        
    }   
    
   render() {
      return (
         <div>
            <button onClick={this.generatePDF} className="bg-red-500 ml-5 py-2 px-3 text-center text-white rounded-[5px]" type="primary">Download PDF</button> 
         </div>
      );
   }
}
export default PDF;