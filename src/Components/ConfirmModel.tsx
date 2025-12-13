const ConfirmModel=({actualDel,NotOk})=>{
  const onConfirm=()=>{
    actualDel();
  }
  const actually=()=>{
    NotOk();
  }
  return(    <>
    <div className="bg-red-300 p-4 transition-all ease-in-out duration-200 rounded">
    <h1 className="text-2xl text-red-600 font-bold mb-2">Delete Message</h1>
    <div className="flex justify-between gap-2">
    <button onClick={onConfirm} className="p-4 px-6 bg-blue-300 rounded-xl my-4 text-black">ok</button>
       <button onClick={actually} className="p-4 px-6 bg-blue-300 rounded-xl my-4 text-black">No</button>
       </div>
    </div>
  </>);
}
export default ConfirmModel;