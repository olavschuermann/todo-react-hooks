import React from 'react';

import ToDoListElement from './ToDoListElement';

const elementList = [
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
]

const ToDoListe = () => {
    return (
        <>
            <h1>To-Do-Liste</h1>
            <ToDoListElement elementList={elementList}/>
        </>
    )
}

export default ToDoListe;