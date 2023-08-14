import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/Notestate'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState } from 'react';
import Alert from './components/Alert';
import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
       msg:message,
       type:type
    });
     setTimeout(()=>{
       setAlert(null);
     },1500);
  }
  return (
    <>
      
      <NoteState>
        <HashRouter>
        <Navbar />
        <Alert Alert={alert} />
           <div className='container'>
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}>  
              </Route>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/login" element={<Login showAlert={showAlert} />}>
              </Route>
              <Route path="/signup" element={<Signup showAlert={showAlert} />}>
              </Route>
            </Routes>
            </div> 
        </HashRouter>
       </NoteState>
    </>
  );
}

export default App;
