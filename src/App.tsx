import Container from "./Components/Container.tsx";
const App=()=> {
  return (
    <div className="flex justify-center">
    <div className="bg-blue-50 w-1/2 h-1/10 p-10 m-10 border-2 ">
    <h1 className="text-center text-2xl font-extrabold text-white my-10 font-[cursive] shadow-xl shadow-stone-300 rounded-xl bg-blue-950 p-2">User Management System</h1>
    <Container/>
    </div>
   </div>
    );
}

export default App;
