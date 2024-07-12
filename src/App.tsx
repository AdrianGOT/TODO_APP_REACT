
import { useEffect } from 'react';
import { mockTodos } from './mocks/todo.mocks';

// Components
import { Todos } from './components/Todos.tsx';
import { Footer } from './components/Footer';
import { Header } from './components/Header';


// Hooks
import { useTodos } from './hooks/useTodos.ts';
import { FilterProvider } from './context/filters.tsx';
 

const App = ():JSX.Element => {
  const { setTodos } = useTodos();

  useEffect(() => {
    setTodos(mockTodos);
  },[setTodos])


 
  return (
    <div className='todoapp'>
      <h1>Todo app mvc</h1>
      <Header />
      
      <FilterProvider>
        <section>
          <Todos/>
        </section>

        <Footer />
      </FilterProvider>
    </div>
  )
}

export default App
