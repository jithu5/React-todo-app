import React,{useState,useRef,useEffect} from 'react'
import './App.css'
import { v4 as uuidv4 } from "uuid";
import NavBar from './Components/NavBar'
import TodoItems from './Components/TodoItems';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)
  
  const saveLocal=(todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    } else {
      setTodos([]);
    }
  }, [])
  
 const handleChange = (e) => {
  setTodo(e.target.value);
}
  const handleAdd=()=>{
    if (todo.length === 0) {
      inputRef.current.focus()
      window.alert("Enter input");
    } else {
      const newTodos = [...todos, { id: uuidv4(), todo, iscompleted: false }];
      setTodos(newTodos);
      saveLocal(newTodos);
      setTodo("");
    }
  };
  
  return (
    <>
      <div className="w-full min-h-screen h-fit pb-5 bg-back ">
        <NavBar />
        <div className="container bg-surface text-darkRose min-h-[90vh] lg:w-[75%] md:w-[93%] w-[97%] mx-auto my-5 rounded-xl p-5 ">
          <div className="addTodo">
            <h1 className="text-3xl text-center font-bold font-head">Add a Todo</h1>
            <div className="flex justify-center space-x-4 my-3 ">
              <input
                ref={inputRef}
                value={todo}
                onChange={handleChange}
                type="text"
                className="rounded-lg w-[55%] md:w-[30%] text-black font-bold font-head px-2 tracking-widest"
              />
              <button
                onClick={handleAdd}
                className="px-5 py-0.5 bg-whitish border-2 font-head rounded-xl font-bold text-lg hover:bg-darkRose hover:text-whitish hover:border-rose-900"
              >
                ADD
              </button>
            </div>
          </div>
          <h1 className="text-xl md:text-4xl py-5 text-center font-head font-semibold">
            Your Todos
          </h1>
          <TodoItems
            todos={todos}
            setTodos={setTodos}
            setTodo={setTodo}
            inputRef={inputRef}
            saveLocal={saveLocal}
          />
        </div>
      </div>
    </>
  );
}

export default App
