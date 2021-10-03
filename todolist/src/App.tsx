import { useState, useEffect, useMemo, useCallback  } from "react"
import List, { Todo } from "./components/List"

const initialTodos = [
  { id: 1, task: "Go shopping" },
  {id: 2, task: "Pay the electricity bill"}
]

const App = () => {
    const [todoList, setTodoList] = useState(initialTodos)
    const [task, setTask] = useState('')
    const [term, setTerm] = useState('')

    useEffect(() => {
        console.log("Rendering <App />")
    })

    const handleCreate = () => {
        const newTodo = {
            id: Date.now(),
            task
        }
        setTodoList([...todoList, newTodo])
        setTask('')
    }

    const handleSearch = () => {
        setTerm(task)
    }

    const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
        console.log("Filtering...")
        return todo.task.toLowerCase().includes(term.toLocaleLowerCase())
    }),
        [term, todoList]
    )

    return (
        <>
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
            <button onClick={handleSearch}>Search</button>
            <List todoList={filteredTodoList} />
        </>
    )
}

export default App