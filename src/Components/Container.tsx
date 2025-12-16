import { useState } from "react";
import Show from "./Show.tsx";
import Form from "./Form.tsx";
const Dummy=[{id:0,Name:"Ritika",Age:21},{id:1,Name:"Pratiksha",Age:20},{id:2,Name:"Deepika",Age:20}];
const Container=()=>{
  const [users,setUsers]=useState(Dummy);
  const takeUser=(entry)=>{
    setUsers((prev)=>{
    return(  [...prev,{id:Math.random(),Name:entry.uName,Age:entry.uAge}]);
    })
  }
  const remove=(userId)=>{
    setUsers((prev)=>prev.filter((u)=>u.id!==userId));
  }
  return(
    <>
    <ul className="bg-blue-200 p-10 m-4 rounded-xl shadow-xl shadow-stone-300 ">
    {
      users.map((obj)=>{
       return( <Show Name={obj.Name} Age={obj.Age} key={obj.id} remove={remove} id={obj.id}/>);
      })
    }
    </ul>
     <div className=" bg-blue-200 p-10 mt-15 text-blue-950 text-4xl rounded-xl ">
    <Form takeUser={takeUser}/>
    </div>
    </>
    );
}
export default Container;