import { useContext, useEffect } from "react"
import { TodoContext } from "../context/todos"

export const useTodos = () => {

    const {
        clearCompletedTodos,
        toggleCompletedTodo,
        removeTodoFromList,
        addTaskToTodoList,
        setTodos,
        todos,
    } = useContext(TodoContext)

    return {
        clearCompletedTodos,
        toggleCompletedTodo,
        removeTodoFromList,
        addTaskToTodoList,
        setTodos,
        todos,
    }
}