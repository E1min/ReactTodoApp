import React, { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoLists from './components/TodoLists'
import "./assets/App.css"



function App() {
const [todo,setTodo]=useState([])

const createtodo =(newTodo)=> {
  setTodo([...todo,newTodo])
}

const removeTodo=(todoId)=>{
   setTodo([...todo.filter(todo=> todo.id!==todoId)])
}

const updatedTodo=(newTodo)=>{
const updatedTodo=todo.map(item=>{
  if (item.id!==newTodo.id) {
    return item
  }
    return newTodo

})

setTodo([...updatedTodo])

}

return (
    <div className='main'>
    <TodoCreate  oncreatetodo={createtodo}/>
    <TodoLists todos={todo} removed={removeTodo} updatedf={updatedTodo}/>
    </div>
  )
}

export default App
