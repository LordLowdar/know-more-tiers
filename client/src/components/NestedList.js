import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 10px 10px 0`,

  display: "inline-flex",
  width: "120px",
  padding: "10px",

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",
  display: "inline-flex",
  padding: "10px",
  margin: "0",
  border: "1px solid grey",
  height: '100px',
  // styles we need to apply on draggables
  ...draggableStyle
});


export default function NestedList(props) {
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity

  // styling sub-items container
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : '',
    display: 'flex',
    flexWrap: (props.index === 0) ? 'wrap' : '',
    height: (props.index === 0) ? '620px' : ''
  });

  return (
    <Droppable droppableId={props.type} type={`droppableSubItem`}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {props.subItems.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div style={{ display: "flex" }}>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content}
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
}
