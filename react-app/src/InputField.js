import React, { useState } from 'react'
const field={
  width: "20%",
  padding: "7px",
  outline: "none"
}
const btn={
  padding: "7px 15px",
  marginLeft: "3px",
}
function InputField(props) {
  const [input,setInput]=useState()
  return (
    <div>
        <input style={field} type="text" value={input} onChange={((e)=>{
            setInput(e.target.value)
        })}/>
        <button style={btn} onClick={(()=>{
          props.addList(input)
          setInput("")
        })}>Add</button>
    </div>
  )
}

export default InputField