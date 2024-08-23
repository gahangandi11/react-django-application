import React, {useState,useEffect, useCallback} from 'react'
import axios from 'axios';

import Card from '../components/Card';
import './Students.css'
const Teachers = () => {
  
  const [studentData, setStudentData] = useState([]);

  useEffect(()=>{

    const fetchdata = async() =>{
         const response =await axios.get('http://localhost:8000/teachers/')

         setStudentData(response.data);
    }

    fetchdata();

  },[])

  return (
    <div className='students-container'>
      { studentData.length>0 &&
        studentData.map(
          (student,index)=>(
            <Card key={index} student={student} type={'teacher'}/> 
          )
        )
      }
    </div>
  )
}

export default Teachers