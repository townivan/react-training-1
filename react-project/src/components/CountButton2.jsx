import { useState } from "react"

function CountButton2(){
    const [count, setCount] = useState(0)

    const handleClick = (e) => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>CountButton2: {count}</button>
        </>
    )
}

export default CountButton2
