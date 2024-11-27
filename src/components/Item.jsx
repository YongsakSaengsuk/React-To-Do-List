import "./Item.css";
export default function Item(porps) {
  const { text, Checkitem, check } = porps;
  return (
    <div className={`item ${text.check ? "diabled" : ""}`}>
      <h2>{text.text}</h2>
      <div className="btn">
        <button className="edit-btn">Edit</button>
        <label>
          <input type="checkbox" onClick={() => Checkitem(text.id)} />
        </label>
      </div>
    </div>
  );
}
