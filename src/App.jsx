import { useState } from "react";
import "./App.css";
import Headers from "./components/header";
import Item from "./components/item";
function App() {
  const [doText, setdoText] = useState("");
  const [textitem, setTextItem] = useState([
    // State for tasks
    { id: 1, text: "hello" },
    { id: 2, text: "world" },
  ]);
  function savetask(e) {
    e.preventDefault(); // Prevent form reload
    if (doText !== "") {
      // id = check textitem what id right now and add that +1 
      const lastId = textitem.length > 0 ? Math.max(...textitem.map((item) => item.id))+1 : 0; 
      setTextItem([...textitem, { id: lastId, text: doText }]);
      setdoText(""); // Clear the input field
    } else {
      alert("Please enter something");
    }
  }

  return (
    <>
      <div>
        <h1>To-Do-lists</h1>
        <Headers doText={doText} setText={setdoText} savetask={savetask} />
        <div className="item-container">
          {textitem.map((item) => (
            <div className="item" key={item.id}>
              <Item text={item} deleteitem={deleteitem} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
