import { Draggable } from "react-beautiful-dnd";
import NestedList from "./NestedList"

export default function Rows(props) {

  // styling outer content container
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 0,
    margin: 0,
    height: (props.index === 0) ? '600px' : '120px',
    display: (props.index !== 0) ? 'flex': 'block',
    width: (props.index === 0) ? '550px' : '700px',
    borderBottom: (props.index !== 0) && (props.index !== 5) ? 'grey solid 1px' : '',
    borderLeft: (props.index !== 0) ? 'grey solid 1px' : '',

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "black",
    backgroundColor: (props.index === 0) ? "#90dcfd" : "black",

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
            <div id={props.item.content}>
              {props.item.content}
            </div>
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