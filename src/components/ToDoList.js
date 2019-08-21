import React, { useState } from 'react';

import ToDoListElement from './ToDoListElement';

const ToDoListe = () => {
    const [elementList, setElementList] = useState([
        {
            id: 1,
            task: 'Zeitung holen',
            done: false
        },
        {
            id: 2,
            task: 'Fenster putzen',
            done: false
        }
    ])

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Gesendet!');
        if(!value) return;
        addToDo(value); 
        setValue('');
    }

    const addToDo = task => {
        console.log(task);
        setElementList([...elementList, {task}]);
        console.log(elementList);
        // id übergeben? 
    }

    // Wert für Input-Feld
    const [value, setValue] = useState('');

    const toDoDelete = (props) => {
        console.log("Deleted!");
        
        // Delete todo - Get List, Entferne To-Do, Neue Liste
        // Vom Child zurückgeben an Parent, dort Array mit Splice neu aufbauen
        const newElementList = [...elementList];
        newElementList.splice(props.element, 1);
        //setElementList(newElementList.splice(index, 1));
        setElementList(newElementList);
        console.log("Index: " + props.element);
        console.log (elementList);

    }

    return (
        <>
            <h1>To-Dos</h1>
            {elementList.map((element) => (
                <ToDoListElement key={element.id} element={element} toDoDelete={toDoDelete}/>
            ))}
            <form onSubmit={handleSubmit}>
                <label>Neues To-Do hinzufügen:</label><br />
                {/* Wert aus Input auslesen! */}
                <input type="text" placeholder="To-Do eingeben..." name="addtodo" value={value} onChange={e => setValue(e.target.value)}/>
                <input type="submit" value="Absenden" />
            </form>
        </>
    )
}

export default ToDoListe;