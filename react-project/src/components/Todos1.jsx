import Todos1Item from "./Todos1Item"
import Todos1ItemB from "./Todos1ItemB"
import './Todos.css'
import { useState } from "react"
import Todos1Input from "./Todos1Input"

export default () => {
    const styles = {
        selected: {
            backgroundColor: 'pink'
        }
    }
    const initialTodos = [{id:0, name:'aaa'}, {id:1, name:'bbb'}, {id:2, name:'ccc'}]
    const [todos, setTodos] = useState(initialTodos)
    const [input, setInput] = useState('')

    const handleAddItem = () =>{
        console.log('welcome to handleAddItem()...')
        console.log('input:', input)
        const newTodo = {};
        newTodo.id = crypto.randomUUID()
        newTodo.name = input
        newTodo.active = false
        setTodos([...todos, newTodo])
    }

    const handleDeleteItem = (clickedTodo) => {
        console.log('delete this one:', clickedTodo)
        setTodos (todos => {
            return todos.filter(todo => todo.id !== clickedTodo.id)
        })
    }

    return (
        <>
            <h1>Todos1: {input}</h1>
            <Todos1Input handleAddItem={() => (handleAddItem())} input={input} setInput={setInput} />
            {
                todos.map((todo) => (
                    <Todos1ItemB key={todo.id} id={todo.id} name={todo.name} handleDeleteItem={() => (handleDeleteItem(todo))}></Todos1ItemB>
                ))
            }

        </>
    )
}