import React, { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./model"

const App: React.FC=() =>{
  const [todo,setTodo]=useState<String>('')
  const [todos,setTodos]=useState<Todo[]>([])


  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),name:todo,isCompleted:false}])
      setTodo('')
    }

  }
  console.log(todos)
  return (
    <>
    <div className="bg-blue-400 p-5">
      <h1 className="text-center text-white font-bold">React With Typescript</h1>
      <div className="flex justify-center pt-3">

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </div>
    </div>
    </>
  )
}

export default App
