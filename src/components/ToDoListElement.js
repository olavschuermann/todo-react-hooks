import React, { useState } from 'react';

import './ToDo.styles.css';

const ToDoListElement = ({ element }) => {
  
    const [toggleClass, setToggleClass] = useState('todo-notdone');

    const doneToDo = () => {
       console.log("Clicked!");
       
       // props.elementList.done = true;
       // setToggleClass('todo-done');
       // Problem: alle todos werden durchgestrichen
    }
    
    return (
        <div>
            {
                <div>
                    <div className={toggleClass}>{element.task}</div>
                    <button onClick={doneToDo}>Erledigt</button>
                </div>
            }
        </div>
    )
}

export default ToDoListElement;