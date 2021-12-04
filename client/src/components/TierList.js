import React, { useState } from 'react';
import '../sass/pages/_tierlist.scss';
import { DragDropContext as TierListContainer, Droppable, Draggable } from 'react-beautiful-dnd';
import initialData from './initial-data'
import Column from './Column2'

function TierList() {

  const [state, setState] = useState(initialData)

  function onDragEnd(result) {

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {

      const newInterestIds = Array.from(start.taskIds);
      newInterestIds.splice(source.index, 1);
      newInterestIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        interestIds: newInterestIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    };

    // moving from one list to another

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);

  };

  return (
    <div className='tier-outer-container'>
      <TierListContainer>
        {state.columnOrder.map(columnId => {
          const column = state.columns[columnId]; // object of column-1 and -2
          const interest = column.interestId.map(interestId => state.interests[interestId]); // object for each individual interest

          return <Column className='tier-page-container' key={column.id} column={column} interest={interest} />;
        })}
      </TierListContainer>
    </div>
  );
}

export default TierList
