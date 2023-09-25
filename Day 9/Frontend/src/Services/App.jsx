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
          <Route path="/" element={<><NavBar/><Home/><Footer/></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/about" element={<><NavBar/><About/><Footer/></>} />
          <Route path="/contact" element={<><Contactus/><Footer/></>} />
          <Route path="/dashboard" element={<><Dashboard/></>} />
          <Route path="/attendance" element={<><Sidebar/><Attendance/></>} />
          <Route path="/marks" element={<><Sidebar/><Marks/></>} />
          <Route path="/subjects" element={<><Sidebar/><Subjects/></>} />
          <Route path="/privacy" element={<><Sidebar/><PrivacyPolicy/><Footer/></>} />
          <Route path="/terms" element={<><Sidebar/><TermsAndConditions/><Footer/></>} />
          <Route path="/contact" element={<><Sidebar/><Contactus/><Footer/></>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;