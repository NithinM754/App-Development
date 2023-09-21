import React from 'react'
import Layout from '../Components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import '../Assets/css/Dashboard.css'
import NavBar from "../Components/Navbar";
import Leftbar from '../Components/Leftbar'

function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
          

            <Leftbar/>
            
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user?.username} </span> ! </h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard;