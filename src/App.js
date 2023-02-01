import './App.css';
import Line2 from "./Line2";
//  Line 1 ****
 import data from "./data.json";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Line } from "recharts";
 

export default function App() { 
  return(     
  <>               
<Line1/>
{/* <Line2/> */}
</>
  )
}

// Line 1 start 

 function Line1() { 
  return(    
    <div className="LineCharts">                
<LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  <Line type="monotone" dataKey="jws" stroke="#09CBCB" />
  <Line type="monotone" dataKey="amt" stroke="#FF9757" />
</LineChart>
</div>
  )
}







