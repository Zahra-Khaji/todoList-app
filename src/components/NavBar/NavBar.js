import { useState } from "react";
import style from "./navBar.module.css";


const NavBar = ({notDoneTasks,changeHandler,status}) => {
  
    return ( 
        <header className={style.navBar}>
            <div className={style.container}>
                <div className={style.Numcontainer}>
                <p className={style.text}>تعداد کارهای انجام نشده :</p>
                <span className={style.tasksNum}>{notDoneTasks}</span>
                </div>
                <select className={style.select} value={status} onChange={changeHandler}>
                    <option className={style.option}  value="ALL" >تمام کارها</option>
                    <option className={style.option}  value="Completed" >کارهای پایان یافته</option>
                    <option className={style.option}  value="UnCompleted"  >کارهای باقی مانده</option>
                </select>
            </div>
        </header>
     );
}
 
export default NavBar;