import React from 'react';
import '../sass/pages/_tierlist.scss';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// const column = state.columns[columnId]; --> object of column-1 and column-2
// const interest = column.interestId.map(interestId => state.interests[interestId]); --> object for each individual interest
// return <Column className='tier-page-container' key={column.id} column={column} interest={interest} />;

export default function Column(props) {
    return (
        <Droppable droppableId={props.type} type={`droppableSubItem`}>
          {(provided) => (
            <div
              ref={provided.innerRef}
            >
              {props.subItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div style={{ display: "flex" }}>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        {item.content}
                        <span
                          {...provided.dragHandleProps}
                          style={{
                            display: "block",
                            margin: "0 10px",
                            border: "1px solid #000"
                          }}
                        >
                          Drag
                        </span>
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      );
};
