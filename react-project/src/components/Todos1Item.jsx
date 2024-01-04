export default (props) => {

    //console.log('props', props)
    function handleClick2(e){
        console.log('welcome to handleClick2...')
        console.log(e)
    }

    return (
        <>
            <li onClick={props.onClick} className={props.className} id={props.id}>{props.name} </li>
        </>
    )
}