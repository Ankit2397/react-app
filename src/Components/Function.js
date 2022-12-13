import React, { useEffect, useState } from "react";
import axios from "axios";

function Function() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    axios
      .get("https://jsonplaceholder.typicode.com/comments") //This email coming from an Api.
      .then((response) => {
        setData(response.data[1].email);
        console.log("API WAS CALLED");
      });
  }, []);


  return (

    <div>
        <div className="w-full py-0 px-[15px] max-w-[1300px] my-0 mx-auto">  
      Hello Function
      <h1>{data}</h1>
      <h3 className="text-3xl font-bold underline">I've rendered {count} times!</h3>;
      </div>
    </div>
  );
}

export default Function;