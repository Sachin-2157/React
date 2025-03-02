import { useState, useEffect } from 'react'


import './App.css'
import { TodoProvider } from './contexts/Todocontext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todos) => {
    setTodos(prev => [{id: Date.now, ...todos}, ...prev])
  }
  const updateTodos = (id, todos) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todos : prevTodo)))
  }
  const deleteTodos = (id) => {
    setTodos((prev) => prev.filter((todos) => todos.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>prevTodo === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

useEffect(() => {
 const todos = JSON.parse(localStorage.getItem("todos"))   
 if(todos && todos.length > 0){
  setTodos(todos)
 }

},[])

useEffect(() => {
  localStorage.setItemItem("todos", JSON.stringify(todos))  
 
},[todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodos,deleteTodos, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Make Your Day!</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
