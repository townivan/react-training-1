export default (props) => {

    //console.log('props', props)
    function handleClick2(e){
        console.log('welcome to handleClick2...')
        console.log(e)
    }

    return (
        <>
            <label style={{display:'block'}} htmlFor={props.id}>
                <input type="checkbox" checked={props.checked ? 'checked' : ''} id={props.id} onChange={props.onChange} className={props.className} /><span style={{userSelect: 'none'}}>{props.name}</span>
            </label>
            {/* <li onClick={props.onClick} className={props.className} id={props.id}>{props.name} </li> */}
        </>
    )
}