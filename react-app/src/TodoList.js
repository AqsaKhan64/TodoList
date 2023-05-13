import React, { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
const LItems={
  listStyleType: "none",
  border: "1px solid black",
  backgroundColor: "white",
  width: "25%",
  padding: "8px",

}
const mainList={
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  padding: "10px 0px",
  position: "relative"
}
const dltBtn={
  marginLeft: "5px",
  fontSize: "18px"
}
const listIcons={
  position: "absolute",
  right: "510px",
  top: "20px"
}
function TodoList({text,updateList,deleteToDo}) {
  return (
    
    <div style={mainList}>
        <li style={LItems}>
            {text}
            <div style={listIcons}>
          <BiEdit style={dltBtn} onClick={updateList}/>
          <AiFillDelete style={dltBtn} onClick={deleteToDo}/>
        </div>
        </li>
     
     
  
    </div>

  )
}

export default TodoList