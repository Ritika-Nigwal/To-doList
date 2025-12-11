import { useState } from "react";
import Input from "./Input";
import Show from "./Show";
const Dummy=[{
  id:0,
  value:"homework",
},{ id:1, value:"dance"}];
const ListItem=()=>{
  const [item,setItem]=useState(Dummy);
    const deleteItem=(id)=>{
    setItem((prev)=>{
      return(
          prev.filter((e)=>e.id!==id));
    })
  };
  const addItem=(item)=>{
    setItem((prev)=>{
      return(
      [
        ...prev,
        {
          id:Math.random(),
          value:item
        }
      ]
      );
    })
  }
  return(
    <div>
    <ul className="bg-blue-400 p-4 m-8 rounded-xl">
    {item.map((ele)=>
     <Show key={ele.id} deleteItem={()=>deleteItem(ele.id)} ele={ele}/>
    )
   }
    </ul>
    <Input addItem={addItem} item={item}/>

    </div>
    );
}
export default ListItem;