import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import style from "./todoList.module.css";


const TodoList = ({todos,doneHandler,removeHandler,updateTodo}) => {
    const [edit,setEdit] = useState({id:null,desc:"",isCompleted:false});
    const editTodoHandler = (newValue) => {
        updateTodo(edit.id,newValue);
        setEdit({id:null,desc:"",isCompleted:false})
    }
    return ( 
     
        <div className={style.todoList}>
            {edit.id ? <TodoForm submitTodo={editTodoHandler} edit={edit} />  : todos.map(todo=>{
                return(
                    <div className={style.taskContainer} key={todo.id}>
                         <div  className={todo.isCompleted && style.doneTask}>
                            <p className={style.text}>
                            {todo.desc}
                            </p>
                        </div>
                         <div className={style.iconContainer}>
                            <span className={style.iconDoneHolder} onClick={()=>doneHandler(todo.id)} title="انجام شد">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            </span>
                            <span className={style.iconEditHolder} onClick={()=>setEdit(todo)} title="ویرایش">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                            </svg>
                            </span>
                            <span className={style.iconDeleteHolder} onClick={()=>removeHandler(todo.id)}  title="حذف">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            </span>


                        </div>
                        
                       

                    
                       
                       
                    </div>
                )
            })}
        </div>
     );
}
 
export default TodoList;