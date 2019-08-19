import React, { useState } from 'react';

import './ToDo.styles.css';

const ToDoListElement = ({ element }) => {

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
    
    return (
        <div>
            {
                <div>
                    <div className={toggleClass}>{element.task}</div>
                    <button onClick={toDoToggle}>Erledigt</button>
                </div>
            }
        </div>
    )
}

export default ToDoListElement;