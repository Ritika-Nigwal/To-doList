import DeleteButton from "./DeleteButton";
import { useState } from "react";
const Show = ({ele,deleteItem}) => {

    return (
        <li className="text-4xl bg-blue-200 m-4 p-4 text-cyan-600 flex justify-between">
         
            <p>
                {ele.value}
            </p>
            <p>
                <DeleteButton deleteItem={deleteItem}/>
            </p>
        </li>
    );
};
export default Show;
