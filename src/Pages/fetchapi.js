import ReactDOM from "react-dom/client";
import useFetch from "./fetch.js";

const  Fetchapi = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div className="w-[33.33%]">
            <div key={item.id} className="mb-2 ml-4 border-gray-200 border-2 flex flex-col justify-between">
            <span className="px-2 py-4 bg-[#0778FF] text-white border-gray-200 border-2">#{item.id} {item.title}</span>
            <span className="px-2 py-4">{item.body}</span>
            </div>
            </div>
          );
        })}
    </>
  );
};
export default Fetchapi;