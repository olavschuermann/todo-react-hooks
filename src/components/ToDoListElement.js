import React from 'react';

const ToDoListElement = props => {
    return (
        <div>
            <h1>ListElement</h1>
            {console.log("Console: " + props.elementList[0].task)}
            {
                props.elementList.map((element) => (
                    <h2>Props {element.id}: {element.task}</h2>
                ))
            }
            
        </div>
    )
}

export default ToDoListElement;