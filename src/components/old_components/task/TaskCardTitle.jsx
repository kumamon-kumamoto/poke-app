import React from 'react'
import {useState} from 'react'

const TaskCardTitle = () => {
    const [isClick,setIsClick]=useState(false)
    const [inputCardTitle,setInputCardTitle]=useState("Totay")

    const handleClick=()=>{
        setIsClick(true)
        console.log(isClick)
    }
    const handleChange=(e)=>{
        setInputCardTitle(e.target.value)
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        setIsClick(false)

    }
    const handleBlur=()=>{
        setIsClick(false)
    }
  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
        {isClick?(
            <form onSubmit={handelSubmit}>
                <input 
                    className='taskCardTitleInput'
                    autoFocus
                    type="text" 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    value={inputCardTitle}
                    maxLength={10}
                />
            </form>
            ):(
            <h3>{inputCardTitle}</h3>
            )}
      
    </div>
  )
}

export default TaskCardTitle
