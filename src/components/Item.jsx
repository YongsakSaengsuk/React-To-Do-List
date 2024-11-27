export default function Item(porps) {
    const {text, Checkitem, check} = porps
    return (
        <div className={`item ${text.check ? "diabled" : ""}`}>
            <h1>Item :{text.id} {text.text}</h1>
            <button>Edit</button>
             <label>
                <input type="checkbox" onClick={() => Checkitem(text.id)} />
            </label>
        </div>
    )
};
