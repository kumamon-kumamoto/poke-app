import React from 'react'
import {v4 as uuid} from "uuid"
const AddTaskCardButton = ({taskCardsList,setTaskCardsList}) => {
  const taskCardId=uuid()
  const addTaskCard=()=>{
    /*　タスクカードを追加する */
    setTaskCardsList([
      ...taskCardsList,
      {
        id:taskCardId,
        draggbleId:`item${taskCardId}`,
      },
    ])
  }
  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        ポケモン　<br></br>ガチャ
      </button>
    </div>
  )
}


export default AddTaskCardButton
