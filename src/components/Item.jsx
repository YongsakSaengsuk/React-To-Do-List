import "./Item.css";
export default function Item(porps) {
  const { text, Checkitem, Edittask } = porps;
  const handleCheckboxChange = () => {
    Checkitem(text.id);  
  };
  return (
    <div className={`item ${text.check ? "diabled" : ""}`}>
      <h2>{text.text}</h2>
      <div className="btn">
        <button className="edit-btn" onClick={() => Edittask(text.id)}>
          Edit
        </button>
        <label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={text.check}
          />
        </label>
      </div>
    </div>
  );
}
