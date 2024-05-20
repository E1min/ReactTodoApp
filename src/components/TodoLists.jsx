import React from 'react'
import Todo from './Todo'


function TodoLists({ todos ,removed,updatedf }) {

  return (
    <div className='list'>
      {
        todos.map(item => (
           <Todo key={item.id} todo={item} removed={removed} updatedf={updatedf}/>
        ))
      }
    </div>
  )
}

export default TodoLists
