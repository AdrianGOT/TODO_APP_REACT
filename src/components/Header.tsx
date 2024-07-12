import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

interface Props {
}

type FormEvent = React.ChangeEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const Header:React.FC<Props> = () => {

    const {addTaskToTodoList} = useTodos();

    const [inputValue, setInputValue] = useState('');

    const getNewTask = (ev: FormEvent ) => {
        ev.preventDefault();

        const { title } = Object.fromEntries( 
            new window.FormData(ev.target) 
        )

        if((title as string).startsWith(' ') || !title) return;

        addTaskToTodoList(title as string);
        setInputValue('');
    }
    
    const changeInputValue = (ev:ChangeEvent) => {
        const {value} = ev.target;    
        setInputValue(value);
    }

    return (
        <header>
            <form onSubmit={getNewTask} autoComplete="off">
                <input 
                    type="text"
                    name="title"
                    className="new-todo"
                    placeholder="Type do you need to be done"
                    value={inputValue}
                    onChange={changeInputValue}

                />

            </form>
        </header>
    )
}