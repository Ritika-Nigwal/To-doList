const Show=(props)=>{
  return(
    <li key={props.ele.id} className="text-4xl bg-blue-200 m-4 p-4 text-cyan-600">{props.ele.value}</li>
    );
}
export default Show;