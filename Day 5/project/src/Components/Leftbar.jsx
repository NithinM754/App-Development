import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import '../Assets/Leftbar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

function Leftbar() {

    const user=useSelector(selectUser)
    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/dashboard')
}
const attendanceHandler = ()=>{
    navigate('/attendance')
}
const marksHandler = () =>{
    navigate('/marks')
}
const subjectsHandler = () =>{
    // dispatch(logout())
    navigate('/subjects')
}
    return (
        <>
            <div className='leftbar-container'>
                <div className='left-bar-container flex flex-col items-start px-3 mt-5 gap-10'>
                    <button className='text-xl' variant="contained" onClick={()=>navigate('/dashboard')}>
                        Dashboard
                    
</button>
                    <button  className='text-xl'  variant="contained" onClick={()=>navigate('/attendance')}>
                        Attendance
</button>
                    <button  className='text-xl'  variant="contained" onClick={marksHandler}>
                        Marks
</button>
                    <button className='text-xl' variant="contained" onClick={subjectsHandler}>
                        Subjects
</button>

                </div>
               
            </div>
        </>
    )
}

export default Leftbar


