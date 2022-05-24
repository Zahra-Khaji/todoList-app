import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import style from "./todoApp.module.css";


const TodoApp = () => {
    const [todos,setTodos] = useState([]);
    const [filterTodos,setFilterTodos] = useState([]);
    const [status,setStatus] = useState("All");

   
    const filterTodoes = (status) => {
        switch(status){
            case "Completed" : setFilterTodos(todos.filter(t=>t.isCompleted));
            break;
            case "UnCompleted" : setFilterTodos(todos.filter(t=>!t.isCompleted));
            break;
            default:setFilterTodos(todos);
        }

    }
    const changeHandler = (e) =>{
        setStatus(e.target.value);
        filterTodoes(e.target.value);

    }

    const addTodoHandler = (todoText) => {
        setTodos([...todos,{id:new Date().getTime(),desc:todoText,isCompleted:false}]);

    }
    const removeHandler = (id) => {
        const filteredTasks = todos.filter((todo)=>todo.id !== id);
        setTodos(filteredTasks);
    }
    const doneHandler = (id) => {
        const index = todos.findIndex(t=>t.id === id);
        const selectedTodo = {...todos[index]};
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);

    }
    const updateTodo = (id,newValue) => {
        const index = todos.findIndex(t=>t.id === id);
        const selectedTodo = {...todos[index]};
        selectedTodo.desc = newValue;
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);


    };
    useEffect(()=>{
        filterTodoes(status);
    },[todos,status]);
    useEffect(()=>{
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if(savedTodos) setTodos(savedTodos)
    },[]);
    useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);



    return ( 
        <div className={style.todoApp}>
            <NavBar notDoneTasks={todos.filter((todo)=>!todo.isCompleted).length} 
                changeHandler={changeHandler} status={status}/>
            <TodoForm submitTodo={addTodoHandler}/>
            <TodoList todos={filterTodos} doneHandler={doneHandler} removeHandler={removeHandler} updateTodo={updateTodo}/>
        </div>
     );
}
 
export default TodoApp;