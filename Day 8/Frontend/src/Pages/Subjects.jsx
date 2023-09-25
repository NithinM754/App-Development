import MotionHoc from "./MotionHoc";

const SubjectsComponent = () => {
  return <h1>Subjects</h1>;
};

const Subjects = MotionHoc(SubjectsComponent);

export default Subjects;












// import React from 'react'
// import Leftbar from '../Components/Leftbar'

// function Subjects() {
//   return (
//     <>

//             <Leftbar />
//             <div className='main-wrapper'>
//                 <div className='welcome-container'>
//                     <h1> Welcome to our Subjects Page </h1>
//                 </div>
//             </div>
//         </>
//   )
// }

// export default Subjects;