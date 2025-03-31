import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTodos(data);
    };
    getTodos();
  }, []);

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
