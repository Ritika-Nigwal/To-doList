import Header from "./Header";
import ListItem from "./ListItem"
const Container=()=>{
  return (
    <div className=" h-full w-200 p-10 m-10 bg-blue-50 flex flex-col gap-10 justify-center">
    <Header />
    <ListItem />
    </div>
    );
}
export default Container;