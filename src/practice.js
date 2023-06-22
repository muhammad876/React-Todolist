import { useState } from "react";
import "./App.css";

export default function Practice(){
    const [item,additem]=useState('');
    const [list,addlist]=useState([]);

    function addtolist(){
        addlist([...list, {id : crypto.randomUUID(), title : item}])
        console.log(list)
        additem('');
    }

    function deleteItem(id){
        addlist(list => list.filter(item=> item.id !== id) )
    }
    return (
       <div className="header">
        <h1>Muhammad Ijaz ALi</h1>
        <input type= "text" placeholder="title" value={item} onChange={e => additem(e.target.value)}></input>
        <button onClick={addtolist}>Add to List</button>

        {list.map(item => {
            return (
                <li id={item.id}>
                   {item.title}
                   <button onClick={e => deleteItem(item.id)}>Delete</button>
                </li>
            )
        })}
        </div> 

    )
}