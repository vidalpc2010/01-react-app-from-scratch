import React, { Fragment, useState, useRef, useEffect } from "react";
import { ToDoList , numItems } from "./Components/ToDoList";
import { v4 as uuidV4 } from "uuid";

const KEY = "todoApp.todos";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "tarea 1", completed: true },
  ]);

  // let is used to define a variable
  //   this is a constant variable
  const todoTaskRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  // the arrow funtions resolve the promes for "This" context
  //   This is an Arrow fucntion ES6
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleToAdd = () => {
    const task = todoTaskRef.current.value;

    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidV4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
      <button onClick={handleToAdd}>add</button>
      <button onClick={handleClearAll}>delete</button>

      <div>
        te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        terminar
      </div>

      <div>Total of imported items : {numItems}</div>
    </Fragment>
  );
}
