const DeleteButton=({deleteItem})=>{
  return(
    <button className="bg-red-100 p-2 text-red-500 text-[20px] rounded hover:bg-rose-600 hover:text-white" onClick={deleteItem}>delete</button>
    );
}
export default DeleteButton;