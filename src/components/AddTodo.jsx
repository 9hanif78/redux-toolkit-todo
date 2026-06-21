import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input.trim()))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="flex items-center gap-3 mt-10">
      <div className="relative flex-1 group">
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400/40 group-focus-within:bg-amber-400 transition-colors duration-300"
        />
        <input
          type="text"
          className="w-full bg-transparent border-0 border-b border-zinc-700/80 focus:border-amber-400 text-lg text-stone-100 placeholder-stone-500 pl-5 pb-3 outline-none transition-colors duration-300 font-light tracking-wide"
          placeholder="What needs doing today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="New todo"
        />
      </div>
      <button
        type="submit"
        disabled={!input.trim()}
        className="shrink-0 inline-flex items-center gap-2 bg-amber-400 text-zinc-950 font-medium text-sm tracking-wide py-3 px-5 rounded-md transition-all duration-200 hover:bg-amber-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-30 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add task
      </button>
    </form>
  )
}

export default AddTodo
