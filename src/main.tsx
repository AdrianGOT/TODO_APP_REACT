import ReactDOM from 'react-dom/client'
import App from './App.tsx'


import 'todomvc-app-css/index.css'
import { TodoProvider } from './context/todos.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodoProvider>
    <App />
  </TodoProvider>,
)
