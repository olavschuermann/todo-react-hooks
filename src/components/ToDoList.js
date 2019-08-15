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


    return (
        <>
            <h1>To-Do-Liste</h1>
            <ToDoListElement elementList={elementList}/>
        </>
    )
}

export default ToDoListe;