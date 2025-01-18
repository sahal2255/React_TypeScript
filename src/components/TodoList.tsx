import React from 'react'
import { Todo } from '../model'


interface Props{
  todos:Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC = ({ todos , setTodos }:Props) => {
  return (
    <div>
      {todos.map((todo)=>(
        <div key={todo.id}>
            <p>{todo.name}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoList
