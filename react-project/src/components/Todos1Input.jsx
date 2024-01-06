export default (props) => {
    return (
        <>
            <input value={props.input} onChange={(e) => props.setInput(e.target.value)} ></input>
            <button onClick={props.handleAddItem}>add</button>
        </>
    )
}