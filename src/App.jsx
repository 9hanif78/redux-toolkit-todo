import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-stone-100">
      <div className="max-w-xl mx-auto px-6 py-20">
        <header className="mb-12">
          <p className="text-xs tracking-[0.18em] uppercase text-emerald-400/70 mb-3">
            Redux Toolkit · Practice project
          </p>
          <h1 className="font-serif text-4xl tracking-tight text-stone-50">
            A short list of things
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Built while learning Redux Toolkit — add, track, and clear tasks.
          </p>
        </header>

        <main>
          <AddTodo />
          <Todos />
        </main>

        <footer className="mt-16 pt-6 border-t border-zinc-800/60">
          <p className="text-xs text-stone-600">
            State managed with Redux Toolkit
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
