import { useState } from "react";
import "bootstrap\\dist\\css\\bootstrap.min.css";
import "./App.css";

export default function Practice() {
  const [item, additem] = useState("");
  const [list, addlist] = useState([]);

  function addtolist() {
    addlist([...list, { id: crypto.randomUUID(), title: item }]);
    additem("");
  }

  function deleteItem(id) {
    addlist( list => list.filter(item => item.id !== id));
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="title"
        value={item}
        onChange={ e => additem(e.target.value)}
      ></input>
      <button onClick={addtolist} className="submit-btn">
        Add to List
      </button>
      {list.length !== 0 && 
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Delete</th>
          
          </tr>
        </thead>
        <tbody>
          {list.map((item,i) => {
            return (
                <>
                <tr id={item.id}>
                <td> {i+1}</td>
                    <td> {item.title}</td>
                    <td> <button onClick={(e) => deleteItem(item.id)} className="btn btn-danger">Delete</button> </td>
                </tr>
           
              </>
            );
          })}
        </tbody>
      </table>
      }
    </div>
  );
}
