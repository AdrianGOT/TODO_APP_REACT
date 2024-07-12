import { TODO_FILTER } from "../const"

export interface Todo {
        id: string,
        title: string,
        completed: boolean
} 

// One type from the Todo interface 
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

// Two type from the Todo interface
export type TodoIdAndComplete = Pick<Todo, 'id' | 'completed'>


export type ListOfTodo = Todo[];

export type FilterValue = typeof TODO_FILTER[keyof typeof TODO_FILTER];