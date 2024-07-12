
import { useTodos } from '../hooks/useTodos';
import { Filters } from './Filters';

interface Props {}

export const Footer: React.FC<Props> = () => {

    const { clearCompletedTodos, todos } = useTodos();

    const unCompletedCount = todos.filter(({completed}) => !completed).length;
    const completedCount = todos.length - unCompletedCount;


    return (
        <footer className="footer">
            <span className="todo-count">
                <strong> {unCompletedCount} / {unCompletedCount + completedCount} Tareas</strong>
            </span>

            <Filters />

            {
                completedCount > 0 && (
                    <button 
                        className='clear-completed'
                        onClick={clearCompletedTodos}> 
                            Borrar completados
                    </button>)
            }
        </footer>
    )
}