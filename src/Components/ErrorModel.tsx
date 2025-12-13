const ErrorModel=({error,message,onConfirm})=>{
  return(
    <>
    <div className="bg-red-300 p-10 transition-all ease-in-out duration-200 rounded">
    <h1 className="text-6xl text-red-600 font-bold mb-4">{error}</h1>
    <p>{message}</p>
    <button onClick={onConfirm}className="p-4 px-6 bg-blue-300 rounded-xl my-4 text-black">ok</button>
    </div>
  </>
    );
}
export default ErrorModel;