import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NestedList from "./NestedList"

export default function Rows(props) {

  const grid = 8;

  // styling outer content container
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: 0,
    height: (props.index === 0) ? '680px' : '136px',
    display: (props.index !== 0) ? 'flex': 'block',
    width: (props.index === 0) ? '550px' : '700px',

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
  });

  return (
    <Draggable key={props.key} draggableId={props.draggableId} index={props.index} item={props.item}>
      {(provided, snapshot) => (
        <div>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            {props.item.content}
            <NestedList
              index={props.index}
              subItems={props.item.subItems}
              type={props.item.id}
            />
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  )

}