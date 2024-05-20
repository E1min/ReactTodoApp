import React, { useState } from 'react'

function TodoCreate({ oncreatetodo }) {
    const [newTodo, setNewtodo] = useState('')

    function CleanInput() {
        setNewtodo("")
    }

    const createtodo = () => {
        if (!newTodo) return
        const myobj = {
            id: Math.floor(Math.random() * 99999),
            content: newTodo
        }
        oncreatetodo(myobj)
        CleanInput()

    }


    return (
        <div className='creating'>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewtodo(e.target.value)}
                    placeholder='Enter Todo' />
            </div>
            <div className='btn'>
                <button onClick={createtodo}>Create Todo</button>
            </div>
        </div>
    )
}

export default TodoCreate
