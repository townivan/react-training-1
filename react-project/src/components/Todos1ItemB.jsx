export default (props) => {

    return (
        <>
            <label style={{display:'block'}} htmlFor={props.id}>
                <input type="checkbox" id={props.id} onChange={props.onChange} className={props.className} /><span style={{userSelect: 'none'}}>{props.name}</span>
                <button onClick={props.handleDeleteItem}>delete</button>
            </label>
            {/* <li onClick={props.onClick} className={props.className} id={props.id}>{props.name} </li> */}
        </>
    )
}