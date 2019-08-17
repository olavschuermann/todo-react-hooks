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
    }

    // Wert für Input-Feld
    const [value, setValue] = useState('');

    return (
        <>
            <h1>To-Do-Liste</h1>
            <ToDoListElement elementList={elementList}/>
            <form onSubmit={handleSubmit}>
                <label>Neues To-Do hinzufügen:</label><br />
                {/* Wert aus Input auslesen! */}
                <input type="text" name="addtodo" value={value} onChange={e => setValue(e.target.value)}/>
                <input type="submit" value="Absenden" />
            </form>
        </>
    )
}

export default ToDoListe;