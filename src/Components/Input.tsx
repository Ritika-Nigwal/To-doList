import { useState } from "react";
const Input=(props)=>{
  const [title,setTitle]=useState("");
  const [flag,setFlag]=useState(true);
  const store=(event)=>{
    setTitle(event.target.value);
  }
  const addData=()=>{
    if(title.trim()!==""){
    props.addItem(title);
    setTitle("");
    setFlag(false);
    }
    else{
      setFlag(true);
    }
  }

  return(
    <div className="flex gap-2">
    <input value={title} type="text" className={`m-4 p-4 rounded outline-none text-4xl ${flag?"bg-red-100 border-2 border-red-500":"bg-blue-100 border-blue-500 border-2"}`} onChange={store}></input>
    <button className="rounded-xl bg-blue-950 text-white py-0 px-4 text-4xl hover:bg-blue-500 hover:cursor-pointer" onClick={addData}>Add Item</button>
    </div>
    );
 } 
export default Input;