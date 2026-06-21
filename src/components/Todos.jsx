import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="mt-10">
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-serif text-2xl text-stone-100 tracking-tight">
          Your list
        </h2>
        <span className="text-xs text-stone-500 tracking-wide uppercase">
          {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="border border-dashed border-zinc-700/60 rounded-lg py-12 text-center">
          <p className="font-serif text-lg text-stone-400 italic">
            Nothing here yet
          </p>
          <p className="text-sm text-stone-600 mt-1">
            Add your first task above to get started
          </p>
        </div>
      ) : (
        <ul className="list-none space-y-2.5">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="group relative flex items-center justify-between bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 pl-4 pr-3 py-3.5 rounded-lg transition-colors duration-200"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-400/0 group-hover:bg-amber-400/60 transition-colors duration-200 rounded-l-lg"
              />
              <span className="text-stone-200 text-[15px] leading-snug pr-4 ">
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                aria-label={`Delete "${todo.text}"`}
                className="shrink-0 text-stone-500 hover:text-red-400 p-2 rounded-md hover:bg-red-400/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-18px h-18px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos
