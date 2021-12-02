import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const styles = {
  container: {
    margin: '8px',
    border: '1px solid lightgrey',
    borderRadius: '2px',
  },
  title: {
    padding: '8px',
  },
  taskList: {
    padding: '8px',
  }
};

export default function Column(props) {
    return (
        <div style={styles.container}>
          <div style={styles.title}>{props.column.title}</div>
          <Droppable droppableId={props.column.id}>
          {provided => (
            <div style={styles.taskList} ref={provided.innerRef} {...provided.droppableProps}>
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
