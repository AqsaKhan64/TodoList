import React, { useState } from 'react'
import InputField from './InputField'
import TodoList from './TodoList'
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
function App() {
  const [listTodo,setList]=useState([])
  let addList=(input)=>{
    if(input!=='')
    setList([...listTodo,input])
  }
  const deleteItems=(key)=>{
    let newList=[...listTodo]
    newList.splice(key,1)
    setList([...newList])
  }
  return (
    <div style={mainCntnt}>
      <h1 style={head}>TODO LIST</h1>
      <InputField addList={addList}/>
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteListItem={deleteItems}/>
        )
      })}
    </div>
  )
}

export default App
