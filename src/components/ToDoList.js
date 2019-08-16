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
    }

    return (
        <>
            <h1>To-Do-Liste</h1>
            <ToDoListElement elementList={elementList}/>
            {/* Formular für Hinzufügen von To-Dos */}
            <form onSubmit={handleSubmit}>
                <label>Neues To-Do hinzufügen:</label><br />
                <input type="text" name="addtodo" />
                <input type="submit" value="Absenden" />
            </form>
        </>
    )
}

export default ToDoListe;