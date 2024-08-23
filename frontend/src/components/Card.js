import React from 'react';
import './Card.css'; // Import the CSS file for styling the card

const Card = ({ student,type }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{student.firstName} {student.lastName}</h2>
      </div>
      <div className="card-body">
        <p><strong>ID:</strong> {student.id}</p>
        {/* <p><strong>Age:</strong> {student.age}</p> */}
        {type =='student' ?  <p><strong>Age:</strong> {student.age}</p> :  <p><strong>Department:</strong> {student.department}</p>}
      </div>
    </div>
  );
};

export default Card;
