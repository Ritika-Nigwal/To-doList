import { useState } from "react";
import ConfirmModel from "./ConfirmModel";

const Button=({id,remove})=>{
  const [state,setState]=useState(false);
 const confirm=()=>{
  setState(true);
 }
 const actualDel=()=>{
   if(state===true){
     remove(id);
     useState(false);
   }
 }
 const NotOk=()=>{
   useState(false);
 }
  return(
    <>
    {
      state && <ConfirmModel  actualDel={actualDel} NotOk={NotOk}/>
    }
    <button onClick={confirm}><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" className="h-10 w-10"/></button>
    </>
    );
}
export default Button;