import TodoApp from "./components/TodoApp/TodoApp";
import "./App.css"

const App = () => {
    return ( 
     <div className="App">
        <h1>لیست کارهای من</h1>
        <h2>یک هدف بدون برنامه ریزی تنها یک آرزوست</h2>
        <TodoApp/>
     </div>
     );
}
 
export default App;