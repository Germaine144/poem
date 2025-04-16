import React, { useState} from "react"; 


function Count() {
    const [count, setCount] = useState(0); 
   return (
    <div className="flex items-center justify-center gap-8 ">
      <h2 className="text-3xl font-semibold mb-6">Count: {count}</h2>
      {count > 15  ? (<p> High Score!</p>): (<p>not display </p>)}
      {count  == 8   ? (<p>eight !</p>): (<p>not display </p>)}
      <button className="mt-2 px-4 py-4 mx-4 bg-green-600 text-white rounded-xl text-xl font-bold " onClick={()=>{setCount(count+2)}}>Increment</button>
      <button className="mt-2 px-4 py-4 mx-4 bg-green-600 text-white rounded-xl text-xl font-bold " onClick={()=>{setCount(count-5)}}>Decrement</button>
{/*       
      <button className="mt-2 px-4 py-4  bg-red-600 text-white rounded-xl text-xl font-bold " onClick={()=>{setCount(count-1)}}>Decrement</button> 
      <button className="mt-2 px-4 py-4 bg-yellow-600 text-white rounded-xl text-xl font-bold " onClick={()=>setCount(0)}>Resert</button> */}
    </div>
  )
}

export default Count;
