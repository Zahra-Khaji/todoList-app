import { useEffect, useRef, useState } from "react";
import style from "./todoForm.module.css";
const TodoForm = ({submitTodo,edit}) => {
    const [todo,setTodo] = useState(edit ? edit.desc : "");
    const inputRef = useRef(null);
    useEffect(()=>{
      inputRef.current.focus();
    },[])
    const changeHandler = (e) => {
        setTodo(e.target.value)
    }
    const submitHandler = (e) => {
      if(todo === ""){
        alert("کاری تعریف نشده است");
        return;
      }
        e.preventDefault();
        submitTodo(todo);
        setTodo("");

    }
    return ( 
   <form className={style.todoForm} onSubmit={submitHandler} >
   
      <div className={style.todoControl}>
      <input className={style.taskInput} 
      type="tex"
       value={todo} 
      onChange={changeHandler} 
      ref={inputRef}
      placeholder="تعریف کار جدید..."
      />
        <span className={style.iconholder} onClick={submitHandler} title={edit ? "ویرایش کن" : "اضافه کن"}>
       {edit ? (    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                            </svg>) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
       )}
   </span>

 
   </div>
   </form>
     );
}
 
export default TodoForm;