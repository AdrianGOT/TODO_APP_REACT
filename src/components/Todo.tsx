import { useTodos } from '../hooks/useTodos';
import { TodoId, TodoIdAndComplete, type Todo as OneTodo } from '../interfaces/todos';

type Props = OneTodo;

type ChangeInputEvent = React.ChangeEvent<HTMLInputElement>

export const Todo: React.FC<Props> = ({
    id, 
    title,
    completed
}):JSX.Element => {

    const {
        removeTodoFromList, 
        toggleCompletedTodo } = useTodos();

    const changeCompletedTodo = ({ ev }: { ev: ChangeInputEvent } ): void => {
        const complete = ev.target.checked;
        toggleCompletedTodo({ id, complete });
    }
 
    return(
        <li className={completed? 'completed' : ''}>
            <div className="view">
                <input 
                    type="checkbox" 
                    checked={completed}
                    className="toggle"
                    onChange={(ev: ChangeInputEvent) => {
                        changeCompletedTodo({ ev })
                    }}
                    />

                <label>{title}</label>
                <button 
                    className="destroy"
                    onClick={() => removeTodoFromList({id}) }>
                </button>
            </div>
        </li>
    )
}