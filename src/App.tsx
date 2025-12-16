import Container from "./Components/Container.tsx";
const App=()=> {
  return (
    <>
    <div className="bg-blue-50 p-10 m-10 border-2">
    <h1 className="text-center text-6xl font-extrabold text-white my-15 font-[cursive] shadow-xl shadow-stone-300 rounded-xl bg-blue-950 p-4">User Management System</h1>
    <Container/>
    </div>
   </>
    );
}

export default App;
