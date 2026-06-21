# Redux Toolkit Todo

A minimalist todo app built with React and Redux Toolkit. The focus is on clean state management, a thoughtful empty state, and small interface details — not feature count.

## Why this project

Most todo app tutorials stop at "it works." This one is meant to be looked at: a deliberate type pairing, a single accent color used with intent, and an interface that handles its edge cases (empty list, blank input) instead of ignoring them.

## Built with

- React
- Redux Toolkit
- Tailwind CSS

## Features

- Add and remove tasks with Redux Toolkit slices and actions
- Input validation — empty or whitespace-only tasks are rejected
- A real empty state, not a blank screen
- Hover and focus micro-interactions on inputs, buttons, and list rows

## Getting started

```bash
git clone https://github.com/your-username/redux-toolkit-todo.git
cd redux-toolkit-todo
npm install
npm run dev
```

## Project structure

```
src/
  components/
    AddTodo.jsx       Input form for creating a new task
    Todos.jsx         Renders the task list and empty state
  features/
    todo/
      todoSlice.js     Redux Toolkit slice: state, actions, reducer
  App.jsx              Page layout and component composition
```

## What I'd add next

- Mark tasks as complete, not just delete them
- Filter by all / active / completed
- Persist tasks to local storage

## License

MIT
