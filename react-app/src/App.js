import React, { useState } from 'react'
import TodoList from './TodoList'
import { useEffect } from 'react';
import {getAllTodo,addToDO,updateToDO,deleteToDo} from './components/HandleApi'
import './index.css';

const mainCntnt={
  backgroundColor: "#8132a8",

  height: "700px",
  textAlign: "center",
  paddingTop:"100px"
}
const head={
  color: "white"
}
const field={
  width: "20%",
  padding: "8px",
  outline: "none"
}
const btn={
  padding: "8px 15px",
  marginLeft: "3px",
}
function App() {
  const [toDo,setTodo]=useState([])
  const [text,setInput]=useState("")
  const [IsUpdate,setUpdate]=useState(false)
  const [toDoId,setToDoId]=useState("")
  useEffect(() => {
    getAllTodo(setTodo)
  }, [])
  const updateList = (_id, text) => {
    setUpdate(true)
    setInput(text)
    setToDoId(_id)
  }
  
  return (
    <>
    <div style={mainCntnt}>
      <h1 style={head}>TODO LIST</h1>
      <div>
  
  <input style={field} type="text" value={text} onChange={((e)=>{
      setInput(e.target.value)
  })}/>
 
 <button style={btn} onClick={IsUpdate ? ()=> updateToDO(toDoId,text,setTodo,setInput,setUpdate): ()=>addToDO(text,setInput,setTodo)}>
  {IsUpdate ? "update": "Add"}
  </button>

</div>
{toDo.map((item) => <TodoList 
          key={item._id} 
          text={item.text}
          updateList={()=>updateList(item._id , item.text)}
          deleteToDo = {() => deleteToDo(item._id, setTodo)}
         />)}
       
       
    
    </div>
    </>
  )
}

export default App
