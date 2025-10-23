import { useState, type ChangeEvent } from "react";

interface ITodo {
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index: number) => {
    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <section>
      <h1>Todo App</h1>

      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter new todo"
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, idx) => (
          <li
            key={idx}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(idx)}
            />
            {todo.text}

            <button onClick={() => handleDeleteTodo(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default TodoList;
