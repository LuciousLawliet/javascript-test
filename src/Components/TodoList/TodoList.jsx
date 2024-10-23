import { useState, useEffect } from "react";
import TodoItems from "./TodoItems.jsx";
import TodoListForm from "./TodoListForm.jsx";

export default function TodoList() {
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (title) => {
    setTodoList((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  };

  const handleCheck = (id, completed) => {
    setTodoList((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodoList((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <TodoListForm onSubmit={addTodo} />
      <TodoItems
        todoList={todoList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
}
