import React, { useState } from 'react';

import './ToDo.styles.css';

const ToDoListElement = props => {
  
    const [toggleClass, setToggleClass] = useState('todo-notdone');

    const doneToDo = () => {
       console.log("Clicked!"); 
       setToggleClass('todo-done');
    }
    
    return (
        <div>
            <h1>To-DOs</h1>
                {
                    props.elementList.map((element) => (
                        <div>
                            <div className={toggleClass} key={element.id}>{element.task}</div>
                            <button onClick={doneToDo}>Erledigt</button>
                        </div>
                    ))
                }
        </div>
    )
}

export default ToDoListElement;