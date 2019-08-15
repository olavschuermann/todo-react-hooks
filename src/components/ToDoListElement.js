import React from 'react';

const ToDoListElement = props => {
    return (
        <div>
            <h1>ListElement</h1>
            {console.log("Console: " + props.elementList[0].task)}
            <ul>
                {
                    props.elementList.map((element) => (
                        <li key={element.id}>{element.done}: {element.task}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ToDoListElement;