import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import User from "./Component/User";
import Users from "./Component/User2";
import Add from "./indexdb";

function App() {
  return (
    <div>
      <h2>React JS On Load and On Error Image Event Handler Example</h2>
      <User/>
      <Add/>
      <div className="container mt-5">
      <h2 className="mb-4">React Query useMutation Hook Delete Data from Database Example</h2>
      <Users />
    </div>
    </div>
  );
}
export default App;
