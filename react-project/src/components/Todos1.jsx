import Todos1Item from "./Todos1Item"
import Todos1ItemB from "./Todos1ItemB"
import './Todos.css'
import { useState } from "react"

export default () => {
    const styles = {
        selected: {
            backgroundColor: 'pink'
        }
    }
    const initialTodos = [{id:0, name:'aaa', active:false}, {id:1, name:'bbb', active:true}, {id:2, name:'ccc', active:false}]
    const [todos, setTodos] = useState(initialTodos)

    const handleClick3 = (clickedTodo) => {
        //console.log('e:', e)
        console.log('clickedTodo:', clickedTodo )

        setTodos([...todos].map((tt) => {
            clickedTodo.id === tt.id ? tt.active = true : tt.active = false
            return tt
        }))
    }

    return (
        <>
            <h1>Todos1:</h1>
            {/* <ul> */}
            {
                todos.map((todo) => (
                    <Todos1ItemB key={todo.id} id={todo.id} name={todo.name} checked={todo.active} onChange={() => (handleClick3(todo))} className={todo.active ? 'imselected' : null}></Todos1ItemB>
                ))
            }
            {/* </ul> */}
        </>
    )
}