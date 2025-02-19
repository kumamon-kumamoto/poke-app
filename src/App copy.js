import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"
import "./App.css"
import { useState } from "react"

function App() {
  // const [items]=useState(["item0","item1","item2"])
  const [items]=useState([
    {id:0,text:"item0"},
    {id:1,text:"item1"},
    {id:2,text:"item2"}

  ])
  const onDragEnd=(result)=>{
    // console.log(result.source.index)
    // console.log(result.destination.index)
    const remove=items.splice(result.source.index,1)
    items.splice(result.destination.index,0,remove[0])
  }
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item,index)=>(
              <Draggable draggableId={item.text} index={index} key={item.id}> 
                {(provided)=>(
                  <div 
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                    {item.text}
                    </div>
                )}
              </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>

  )
}

export default App;
