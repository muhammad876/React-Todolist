import { useState } from "react";
import "./App.css";
function App() {
  const [item, addItem] = useState("");
  const [itemlist, addItemlist] = useState([]);
  const onbtnclick = () => {
    addItemlist([
      ...itemlist,
      { id: crypto.randomUUID(), title: item, checked: false },
    ]);
    console.log(itemlist);
    addItem("");
  };
  function deletetodo(id){
     addItemlist(itemlist => itemlist.filter(item => item.id !== id))
  }
  function changetodo(id, value){
    addItemlist( itemlist => {
      return itemlist.map(item => {
        if(item.id === id){
          return { ...item,value}
        }
        return item;
      })
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <input
          type="text"
          id="inputbox"
          value={item}
          onChange={(e) => addItem(e.target.value)}
        ></input>
        <button className="btn btn-success" onClick={onbtnclick}>
          Add to List
        </button>
      </header>
      <div className="App-header">
        <ul className="listtodo">
        {itemlist.map((item) => {
          return (
            <li key={item.id}>
               <input type="checkbox" value={item.checked} onChange={e => changetodo(item.id, e.target.value)}></input>
              {item.title} 
              <button className="btn btn-danger" onClick={e => deletetodo(item.id)}>Delete</button>
             
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
