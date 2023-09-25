import React from 'react'
import '../Assets/css/Home.css'
import { useNavigate } from 'react-router-dom';


function Home() {
  var navigate=useNavigate()
  return (
    <>
    <div className='main-container '>
      <div className='imagebanner'>
        <div className='content-box-bg'>
          
          <h1>Student Database Management System</h1>
          <p>
            This website is used to manage Students' data such as marks, attendance, fees and so on. It can also be used as students for viewing their whole details in one webpage.
          </p>
        <button onClick={()=>navigate('/signup')}>Get Started</button>
        </div>
         
      </div>
    </div>
    </>
  )
}

export default Home;