import React, { useState, useEffect, memo } from 'react';
import TaskCardDeleteButton from './b_TaskCardDeleteButton';
import { Draggable } from '@hello-pangea/dnd';

const PokeCard = memo(({ taskCardsList, setTaskCardsList, taskCard, index, pokeURL }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonPhoto, setPokemonPhoto] = useState('');

  // pokemon情報を1回だけ取得する
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(pokeURL);
        const data = await res.json();
        if (data && data.name) {
          setPokemonName(data.name);
          setPokemonPhoto(data.sprites.front_default);
        }
      } catch (error) {
        console.error('error!', error);
      }
    };

    fetchPokemon();
  }, [pokeURL]); // pokeURL が変わったときだけ実行される

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="taskCardTitleAndTaskCardDeleteArea" {...provided.dragHandleProps}>
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <div>{pokemonName}</div>
          {pokemonPhoto && <img src={pokemonPhoto} alt={pokemonName} />}
        </div>
      )}
    </Draggable>
  );
});

export default PokeCard;
