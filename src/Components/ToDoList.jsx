import React from 'react';
import ToDoItem from './ToDoItem';

export function ToDoList({todos , toggleTodo}){
    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>
    );
}

// multiple export es permitido cuando no tenemos definido en el mismo archivo un "export Default" 
// para lo que cuando se importa es necesario mandar allmar a la funcion importada con el mismo nombre
// con la que fue creada haciendo uso de {}
export const numItems = 543234234;

export const numTwo = 4532322;

