import React, { useState } from 'react';

import './ToDo.styles.css';

const ToDoListElement = ({ element, toDoDelete, id }) => {

    const [toggleClass, setToggleClass] = useState('todo-notdone');

    const toDoToggle = () => {
        console.log("Clicked!");
        
        // Toggle: if true than false and vice versa
        // Improvement: One liner for toggle
        if (toggleClass === 'todo-notdone') {
            setToggleClass('todo-done');
        } else {
            setToggleClass('todo-notdone');
        }    
    }

        
        // Delete todo - Get List, Entferne To-Do, Neue Liste
        // Vom Child zurückgeben an Parent, dort Array mit Splice neu aufbauen
    
    return (
        <div>
            {
                <div>
                    <div className={toggleClass}>{element.task}</div>
                    <button onClick={toDoToggle}>Erledigt</button>
                    <button onClick={toDoDelete} index={element.id}>Löschen</button>
                </div>
            }
        </div>
    )
}

export default ToDoListElement;