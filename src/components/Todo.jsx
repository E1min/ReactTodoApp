import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, removed,updatedf }) {
    const { id, content } = todo
    const [editable,setEditable]=useState(false)
    const [newTodo,setNewtodo]=useState(content)
const ClickEdit=()=>{
    setEditable(true)
}

const ClickCheck=()=>{
    const newObj={
        id:id,
        content:newTodo
    }
    updatedf(newObj)
    setEditable(false)
}

    const removeClick = () => {
        removed(id)
    }

    return (
        <div className='todo'>
            <div>
                {
                    editable ? <input type="text" value={newTodo} onChange={(e)=>setNewtodo(e.target.value)}/>: content
                }
            </div>
            <div className='icons'>
                <MdDelete onClick={removeClick} />
                {
                    editable? <FaCheck onClick={ClickCheck} />:  <FaEdit onClick={ClickEdit}/>
                }
              
                
            </div>
        </div>
    )
}

export default Todo
