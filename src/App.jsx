import { useState } from "react";
import "./App.css";
import Headers from "./components/header";
import Item from "./components/item";
function App() {
  const [doText, setdoText] = useState("");
  const [EditText, setEditText] = useState(null);
  const [textitem, setTextItem] = useState([
    // State for tasks
    { id: 1, text: "hello", check: false },
    { id: 2, text: "world", check: false },
  ]);
  function savetask(e) {
    e.preventDefault();
    if (doText.trim() === "") {
      alert("Please enter something");
      return;
    }

    if (EditText !== null) {
      // Edit existing task
      const updatedItems = textitem.map((item) =>
        item.id === EditText ? { ...item, text: doText } : item
      );
      console.log(updatedItems);
      setTextItem(updatedItems);
      setEditText(null); // Reset edit state
    } else {
      // Add new task
      const lastId =
        textitem.length > 0
          ? Math.max(...textitem.map((item) => item.id)) + 1
          : 1; // Ensure unique ID
      setTextItem([...textitem, { id: lastId, text: doText, check: false }]);
    }

    setdoText(""); // Clear the input field
  }

  function Checkitem(id) {
    const newitem = textitem.map((item) => {
      if (item.id === id) {
        return { ...item, check: !item.check };
      }
      return item;
    });
    setTextItem(newitem);
  }
  function Edittask(id) {
    const taskToEdit = textitem.find((item) => item.id === id);
    if (taskToEdit) {
      setEditText(taskToEdit.id);
      setdoText(taskToEdit.text);
    }
  }
  return (
    <>
      <div>
        <Headers
          doText={doText}
          setText={setdoText}
          savetask={savetask}
          EditText={EditText}
        />
        <div className="item-container">
          {textitem.map((item) => (
            <div key={item.id}>
              <Item text={item} Checkitem={Checkitem} Edittask={Edittask} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
