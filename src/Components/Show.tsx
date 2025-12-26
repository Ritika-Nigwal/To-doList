import Button from "./Button.tsx";
const Show=({Name,Age,id,remove})=>{
  return(
    <>
    <li className="bg-blue-100 text-blue-950 font-[serif] text-2xl m-4 p-4 width-full border-1 border-blue-950 rounded-xl flex justify-between shadow-2xl shadow-purple-300">
    <p>{Name}:({Age})</p>
    <Button id={id} remove={remove}/>
    </li>
    </>
    );
}
export default Show;