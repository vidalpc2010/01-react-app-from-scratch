import React from 'react';


// La palabra reservada "default" la usamos para al momento de importar no necesitemos llaves {} para llamar a la funcion exportada
// lo cual permite importar cambiando el nombre "ToDoItem" por cualquier otra nombre sin perder la referencia de que la funcion importada es la que
// fue marcada como default
export default function ToDoItem({todo ,toggleTodo}){

    const {id, task, completed} = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }

    return(
        <li>
            <input type="checkbox" checked={completed} onChange={handleTodoClick}/>
            {task}
        </li>
    )
}

