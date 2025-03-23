import React, { useState, useContext } from 'react';
import PokeCard from './PokeCard';
import AddTaskCardButton from './b_AddTaskCardButton';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import pokeApiContext from "../index";

const PokeCards = () => {
  const pokeAPI_info = useContext(pokeApiContext);
  const URL = pokeAPI_info.URL;

  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
      pokeURL: `${URL}${Math.floor(Math.random() * 1000) + 1}`,
    },
  ]);

  // ドラッグ終了時に並び替え
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // ドラッグ先が有効でない場合、何もしない
    if (!destination) return;

    // 位置を変更
    const reorderedList = [...taskCardsList];
    const [removed] = reorderedList.splice(source.index, 1);
    reorderedList.splice(destination.index, 0, removed);

    setTaskCardsList(reorderedList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <PokeCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
                pokeURL={taskCard.pokeURL}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              pokeURL={URL}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PokeCards;
