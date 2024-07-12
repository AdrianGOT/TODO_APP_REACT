import { createContext, useState } from "react";
import { ListOfTodo, Todo, TodoId } from "../interfaces/todos";
import {v4 as uuidv4} from 'uuid';


// 1 step => create the context
interface TodoContext {
    todos: ListOfTodo,
    addTaskToTodoList   : (title: string) => void,
    removeTodoFromList  : ({id}: TodoId) => void,
    clearCompletedTodos : () => void,
    toggleCompletedTodo : ({id, complete}: TodoToggle) => void,
    setTodos            : (todos: ListOfTodo) => void
}

interface TodoToggle {
    id: string, 
    complete: boolean
}

const initialValue: TodoContext = {
    todos: [],
    addTaskToTodoList: (title: string): void =>{
        throw new Error("Function not implemented.");
    },
    removeTodoFromList: function ({ id }: TodoId): void {
        throw new Error("Function not implemented.");
    },
    clearCompletedTodos: function (): void {
        throw new Error("Function not implemented.");
    },
    toggleCompletedTodo: function ({ id, complete }: TodoToggle): void {
        throw new Error("Function not implemented.");
    },
    setTodos: function (todos: ListOfTodo): void {
        throw new Error("Function not implemented.");
    }
}


export const TodoContext = createContext<TodoContext>(initialValue);

export function TodoProvider({children}: React.PropsWithChildren){

    const [todos, setTodos] = useState<ListOfTodo>([]);

    const addTaskToTodoList = (title: string): void => {
        const newId = uuidv4();
        const newTodoList = structuredClone(todos);
    
        const newTask: Todo = {
          title: title,
          id: newId,
          completed: false
        }
        
        newTodoList.unshift(newTask);
        setTodos(newTodoList);
    }

    const removeTodoFromList = ({id}: TodoId) => {
        const newTodoList = structuredClone(todos);
        const index = newTodoList.findIndex(todo => todo.id === id);
        newTodoList.splice(index, 1);
        setTodos(newTodoList);
    }

    const clearCompletedTodos = () => {
        const newTodoList = todos.filter(todo => !todo.completed);
        setTodos(newTodoList);
    }

    const toggleCompletedTodo = ({id, complete}: TodoToggle ) => {
        const newTodoList = structuredClone(todos);
        const index = newTodoList.findIndex(todo => todo.id === id);
        newTodoList[index].completed = complete;
        setTodos(newTodoList);
    }

 
    
    return(
        <TodoContext.Provider value={{
            clearCompletedTodos,
            toggleCompletedTodo,
            removeTodoFromList,
            addTaskToTodoList,
            setTodos,
            todos,
        }}>
            {children}
        </TodoContext.Provider>
    )
}
// 2 step => Export the context 
