export default function Item(porps) {
    const {text, deleteitem} = porps
    return (
        <div>
            <h1>Item :{text.id} {text.text}</h1>
            <button>Edit</button>
            <button onClick={() => deleteitem(text.id)}>Delete</button>
        </div>
    )
};
