// import MotionHoc from "./MotionHoc";
import React, { useState, useEffect } from 'react';
import '../Assets/css/Attendance.css'

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Mohan Giresh', present: false },
    { id: 2, name: 'Nithin', present: false },
    { id: 3, name: 'Manas', present: false },
    { id: 4, name: 'Pramoth', present: false },
    { id: 5, name: 'Haaris', present: false },
    { id: 6, name: 'Kashif', present: false },
    { id: 7, name: 'Vishal', present: false },
    { id: 8, name: 'Kishore', present: false },
    { id: 9, name: 'Prabha', present: false },
    { id: 10, name: 'Kavin', present: false },
    { id: 11, name: 'Neeraj', present: false },
    { id: 12, name: 'Magesh', present: false },
    { id: 13, name: 'Pazhani', present: false },
    { id: 14, name: 'Hajith', present: false },
    { id: 15, name: 'Keerthi', present: false },
  ]);

  const toggleAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="attendance-container">
      <h1>Attendance Management</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => toggleAttendance(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const Attendance = MotionHoc(AttendanceComponent);

export default Attendance;

