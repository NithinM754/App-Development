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
import Leftbar from '../Components/Sidebar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import PrivacyPolicy from '../Pages/Privacy';
import TermsAndConditions from '../Pages/terms';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
          <Route path="/home" element={<><NavBar/><Sidebar/><Home/><Footer/></>} />
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<><NavBar/><About/><Footer/></>} />
          <Route path="/contact" element={<><NavBar/><Contactus/><Footer/></>} />
          <Route path="/dashboard" element={<><NavBar/><Dashboard/><Footer/></>} />
          <Route path="/attendance" element={<><NavBar/><Sidebar/><Attendance/><Footer/></>} />
          <Route path="/marks" element={<><NavBar/><Sidebar/><Marks/><Footer/></>} />
          <Route path="/subjects" element={<><NavBar/><Sidebar/><Subjects/><Footer/></>} />
          <Route path="/privacy" element={<><NavBar/><Sidebar/><PrivacyPolicy/><Footer/></>} />
          <Route path="/terms" element={<><NavBar/><Sidebar/><TermsAndConditions/><Footer/></>} />
          <Route path="/contact" element={<><NavBar/><Sidebar/><Contactus/><Footer/></>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;