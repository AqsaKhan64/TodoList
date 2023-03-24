import React from 'react'
const LItems={
  listStyleType: "none",
  border: "1px solid black",
  backgroundColor: "white",
  width: "20%",
  padding: "7px",

}
const mainList={
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  padding: "10px 0px"
}
const dltBtn={
  marginLeft: "5px",
  padding: "7px 9px",
}
function TodoList(props) {
  return (
    <div style={mainList}>
        <li style={LItems}>
            {props.item}
        </li>
        <button style={dltBtn} onClick={(()=>{
          props.deleteListItem(props.index)
        })}>delete</button>
    </div>
  )
}

export default TodoList