import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

export default function Column(props) {
    return (
        <div className='tier-container'>
          <div className='tier-title'>{props.column.title}</div>
          <Droppable droppableId={props.column.id}>
          {provided => (
            <div className='tier-list-items' ref={provided.innerRef} {...provided.droppableProps}>
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        </div>
    );
};
