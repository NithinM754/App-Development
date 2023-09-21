import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contactus from '../Pages/Contactus';
import Dashboard from "../Pages/Dashboard";
import NavBar from "../Components/Navbar";
import Attendance from '../Pages/Attendance';
import Marks from '../Pages/Marks';
import Subjects from '../Pages/Subjects';
import Leftbar from '../Components/Leftbar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
          <Route path="/home" element={<><NavBar/><Home/></>} />
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<><NavBar/><About/></>} />
          <Route path="/contact" element={<><NavBar/><Contactus/></>} />
          <Route path="/dashboard" element={<><NavBar/><Dashboard/></>} />
          <Route path="/attendance" element={<><NavBar/><Leftbar></Leftbar><Attendance/></>} />
          <Route path="/marks" element={<><NavBar/><Leftbar/><Marks/></>} />
          <Route path="/subjects" element={<><NavBar/><Leftbar/><Subjects/></>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;