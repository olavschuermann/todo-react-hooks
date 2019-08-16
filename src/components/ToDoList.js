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
    }

    return (
        <>
            <h1>To-Do-Liste</h1>
            <ToDoListElement elementList={elementList}/>
            {/* Formular für Hinzufügen von To-Dos */}
            <form>
                <label>Neues To-Do hinzufügen:</label>
                <input type="text" name="addtodo" />
                <input type="submit" value="Absenden" onSubmit={handleSubmit}/>
            </form>
        </>
    )
}

export default ToDoListe;