import { useState } from "react";
import ErrorModel from "./ErrorModel.tsx";
const Form=({takeUser})=>{
  const [uName,setUName]=useState("");
  const [uAge,setUAge]=useState("");
  const [errors,setErrors]=useState({});
  const [errorState,setErrorState]=useState(false) ;
  const nameStored=(e)=>{
    setUName(e.target.value);
  }
  const ageStored=(e)=>{
    setUAge(e.target.value);
  }
  const submitForm=(e)=>{
    e.preventDefault();
    if(uName=="" || uAge==""){
     setErrors({
       error:"Value Error",
       message:"Any of your Enteries are Incomplete",
     })
     setErrorState(true);
      return;
    }
    setUName("");
    setUAge("");
    setErrorState(false);
    setErrors({});
    takeUser({uName,uAge});
  }
  const onConfirm=()=>{
    setErrorState(false);
    setErrors({});
  }
  return(
    <>
    {
      errorState &&  <ErrorModel error={errors.error} message={errors.message} onConfirm={onConfirm}/>
    }
    {
      
    }
    <form className="flex flex-col" onSubmit={submitForm}>
    <label htmlFor="Name">Name:</label>
    <input type="text" id="Name"className="bg-blue-500 rounded p-2 m-4" onChange={nameStored} value={uName}></input>
   <label htmlFor="Age">Age:</label>
    <input type="Number" id="Age"className="bg-blue-500 rounded p-2 m-4" onChange={ageStored} value={uAge}></input>
    <button className="bg-blue-700 text-white w-1/4 mt-4 rounded-xl py-2">Add User</button>
    </form>
    </>
    );
}
export default Form;