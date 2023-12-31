import "./App.css"
import ToDoList from "./ToDoList";
import Meal from "./Meal"
import Home from "./Home";
import NotFound from "./NotFound";
import { Link, Route,Routes } from "react-router-dom";

function App() {

    return (
        <div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/ReactApp-todo-API" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ReactApp-todo-API/todos" className="nav-link">To-Do App</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ReactApp-todo-API/meals" className="nav-link"> Today Meal</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
            <Route path="/" element= {<Home />}/>
            <Route path="/ReactApp-todo-API" element= {<Home />}/>
            <Route path="/ReactApp-todo-API/todos" element= {  <ToDoList />}/>
            <Route path="/ReactApp-todo-API/meals" element= {  <Meal />}/>
            <Route  path="*" element={<NotFound />}/>
            </Routes>
        </div>
    )
}
export default App;