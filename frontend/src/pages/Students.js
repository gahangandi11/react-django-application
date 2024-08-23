import React, {useState,useEffect, useCallback} from 'react'
import axios from 'axios';

import Card from '../components/Card';
import './Students.css'
const Students = () => {
  
  const [studentData, setStudentData] = useState([]);

  useEffect(()=>{

    const fetchdata = async() =>{
         const response =await axios.get('http://localhost:8000/students/')

         setStudentData(response.data);
    }

    fetchdata();

  },[])

  return (
    <div className='students-container'>
      { studentData.length>0 &&
        studentData.map(
          (student,index)=>(
            <Card key={index} student={student} type={'student'}/> 
          )
        )
      }
    </div>
  )
}

export default Students