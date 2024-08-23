import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    student_id: '',
    age: ''
  });

  const [teacher, setTeacher] = useState({
    firstName: '',
    lastName: '',
    teacher_id: '',
    department: ''
  });

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTeacherChange = (e) => {
    const { name, value } = e.target;
    setTeacher(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitStudentDetails = async (e) =>{

   
     const data= await axios.post('http://localhost:8000/students/',student);
     setStudent({
      firstName: '',
      lastName: '',
      teacher_id: '',
      department: ''
    });


  };

  const submitTeacherDetails = async (e) =>{

   
    const data= await axios.post('http://localhost:8000/teachers/',teacher);
    setTeacher(
      {
        firstName: '',
        lastName: '',
        teacher_id: '',
        department: ''
      
    })


 };

  return (
    <div className='home'>
      <div className='student-teacher'>


        <form className='student-form'>
          <h3>Student Form</h3>
          <div>
            <label>First Name:</label>
            <input 
              type='text' 
              name='firstName' 
              value={student.firstName} 
              onChange={handleStudentChange} 
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input 
              type='text' 
              name='lastName' 
              value={student.lastName} 
              onChange={handleStudentChange} 
            />
          </div>
          <div>
            <label>ID:</label>
            <input 
              type='text' 
              name='student_id' 
              value={student.student_id} 
              onChange={handleStudentChange} 
            />
          </div>
          <div>
            <label>Age:</label>
            <input 
              type='number' 
              name='age' 
              value={student.age} 
              onChange={handleStudentChange} 
            />
          </div>
          <button type='submit' onClick={(event)=>{event.preventDefault(); submitStudentDetails()}}>Add Student</button>
        </form>

        <form className='teacher-form'>
          <h3>Teacher Form</h3>
          <div>
            <label>First Name:</label>
            <input 
              type='text' 
              name='firstName' 
              value={teacher.firstName} 
              onChange={handleTeacherChange} 
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input 
              type='text' 
              name='lastName' 
              value={teacher.lastName} 
              onChange={handleTeacherChange} 
            />
          </div>
          <div>
            <label>ID:</label>
            <input 
              type='text' 
              name='teacher_id' 
              value={teacher.teacher_id} 
              onChange={handleTeacherChange} 
            />
          </div>
          <div>
            <label>Department:</label>
            <input 
              type='text' 
              name='department' 
              value={teacher.department} 
              onChange={handleTeacherChange} 
            />
          </div>
          <button type='submit' onClick={(event)=>{event.preventDefault(); submitTeacherDetails()}}>Add Teacher</button>
        </form>

      </div>
    </div>
  )
}

export default Home;
