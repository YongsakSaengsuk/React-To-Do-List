import "./header.css"
export default function header(props) {
  const { doText, setText, savetask } = props;

  return (
    <>
    <h1>To Do List</h1>
    <div className="form-container">
      <form onSubmit={savetask}>
        <input
          type="text"
          className="form-control"
          value={doText}
          onChange={(e) => setText(e.target.value)} // Update input state
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}
