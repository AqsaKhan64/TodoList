import axios from 'axios'

const baseUrl="http://localhost:4000"
const getAllTodo = (setTodo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setTodo(data)
        })
}

const addToDO=(text,setInput,setTodo)=>{
axios.post(`${baseUrl}/create`, {text})
.then((result)=>{
    console.log(result);
    setInput("")
    getAllTodo(setTodo)
})
}
const updateToDO=(toDoId,text,setTodo,setInput,setUpdate)=>{
    axios.put(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data)=>{
    
        setInput("")
        setUpdate(false)
        getAllTodo(setTodo)
    })
    .catch((err)=> console.log(err))
    }
    const deleteToDo = (_id, setTodo) => {

        axios
            .delete(`${baseUrl}/delete/${_id}`,)
            .then((data) => {
                console.log(data)
                getAllTodo(setTodo)
            })
            .catch((err) => console.log(err))
    
    }
export  { getAllTodo,addToDO,updateToDO,deleteToDo};