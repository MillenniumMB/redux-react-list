import React from 'react';
import './App.css';
import {NavLink, Routes, Route, useNavigate} from "react-router-dom";
import Page3 from "./Page/Page3";
import internal from "stream";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";


function App() {
    const navigate = useNavigate()


    const Back= (): void  => {
       // e.stopPreventDefault()
        navigate(-1)
    }

  return (
    <div className="App">

        <NavLink to = "/todo">TODO</NavLink>
        <NavLink to = "/user">USER</NavLink>
        <button onClick={Back}>Back</button>

      <Routes>
          <Route path = '/todo' element={<TodoList/>}/>
          <Route path = '/user' element={<UserList/>}/>
      </Routes>
    </div>
  );
}

export default App;
