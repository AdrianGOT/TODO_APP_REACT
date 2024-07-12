// import { ListOfTodo, TodoId, TodoIdAndComplete } from "../interfaces/todos";
// import { Todo } from "./Todo";

// interface Props {
//     todos: ListOfTodo,
//     onRemoveTodo: ({id}: TodoId) => void,
//     onToggleTodo: ({id, completed}: TodoIdAndComplete) => void
// }

// export const Todos: React.FC<Props> = ({
//   todos,
//   onToggleTodo,
//   onRemoveTodo, 
// }): JSX.Element => {

//     return (
//         <ul className="todo-list">
//         {
//           todos.map(todo => <Todo 
//               key={todo.id} 
//               id={todo.id}
//               title={todo.title}
//               completed={todo.completed}
//               removeTodo={onRemoveTodo}
//               toggleTodo={onToggleTodo}
//               />)
//         }
//       </ul>
//     )
// }


import { TODO_FILTER } from "../const";
import { useFilter } from "../hooks/useFilter";
import { useTodos } from "../hooks/useTodos";

import { Todo } from "./Todo";

interface Props {}

export const Todos: React.FC<Props> = (): JSX.Element => {
    const { todos } = useTodos();
    const { filterSelected } = useFilter();

    console.log('lalo');
    const filteredTodos = todos.filter(todo => {
      
      if(filterSelected === TODO_FILTER.UNCOMPLETED) return !todo.completed;
      if(filterSelected === TODO_FILTER.COMPLETED) return todo.completed;
      return true;
      
    })
    
    return (
        <ul className="todo-list">
        {
          filteredTodos.map(todo => 
          <Todo 
              key={todo.id} 
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              />)
        }
      </ul>
    )
}