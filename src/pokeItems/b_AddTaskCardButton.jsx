import React,{useState,useContext} from 'react'
import {v4 as uuid} from "uuid"
import pokeApiContext from "../index"
  
const AddTaskCardButton =({taskCardsList,setTaskCardsList }) => {
  const taskCardId=uuid()

  const pokeAPI_info=useContext(pokeApiContext);
  const URL=pokeAPI_info.URL;
// const URL="https://pokeapi.co/api/v2/pokemon/";

  const addTaskCard=()=>{

    /*　タスクカードを追加する */
    setTaskCardsList([
      ...taskCardsList,
      {
        id:taskCardId,
        draggableId:`item${taskCardId}`,
        pokeURL:`${URL}${Math.floor(Math.random() * 1000) + 1}`,
      },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        ポケモン　<br></br>ガチャ
      </button>
    </div>
  );
};



export default AddTaskCardButton;
