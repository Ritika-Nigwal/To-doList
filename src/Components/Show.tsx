import Button from "./Button.tsx";
const Show=({Name,Age,id,remove})=>{
  return(
    <>
    <li className="bg-blue-500 text-white text-4xl m-4 p-4 width-full border-2 border-cyan-950 rounded-xl flex justify-between">
    <p>{Name}:({Age})</p>
    <Button id={id} remove={remove}/>
    </li>
    </>
    );
}
export default Show;