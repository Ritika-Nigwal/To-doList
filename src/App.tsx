import Container from "./Components/Container.tsx";
const App=()=> {
  return (
    <div className=" bg-cyan-100 p-10 m-10 border-2">
    <h1 className="text-center text-6xl font-extrabold text-emerald-950 mb-20 font-[cursive] shadow-xl shadow-stone-300 rounded-xl bg-cyan-200 p-2">User Management System</h1>
    <Container/>
    </div>
   
    );
}

export default App;
